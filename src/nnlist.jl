# ! The contents of this file will eventually be made obsolete by the creation of a general neighbor list package.

export NeighborList, neighborlist

struct NeighborList
    j::Vector{Vector{Int}}
    R::Vector{Vector{Float64}}
    r::Vector{Vector{SVector{3,Float64}}}
end
Base.length(nn::NeighborList) = length(nn.j)

# calculates displacement vector x - y with respect to the boundary conditions L
function get_displacement(L::SVector{3,<:AbstractFloat}, x::SVector{3,<:AbstractFloat}, y::SVector{3,<:AbstractFloat})
    d = mod.(x - y, L)
    @. ifelse(isinf(L), x - y, ifelse(2d < L, d, d - L))
end

function neighborlist(s::AbstractSystem{3}, rcutoff::Float64)
    # Convert Positions to Matrix for Ball tree
    X = [SVector{3}(austrip.(p)) for p ∈ position(s)]

    # Create Metric for Periodic Boundary Conditions
    periodic = periodicity(s)
    L = @SVector [periodic[i] ? austrip(bounding_box(s)[i][i]) : Inf for i ∈ 1:3]
    d = Distances.PeriodicEuclidean(L)

    # Build Ball tree
    tree = BallTree(X, d)

    # Intialize empty vectors
    j = Vector{Vector{Int64}}(undef, length(X))              # Neighbors
    R = Vector{Vector{Float64}}(undef, length(X))            # Distances
    r = Vector{Vector{SVector{3,Float64}}}(undef, length(X)) # Positions

    # Fill vectors
    for n in 1:length(X)
        neighbors = filter(m -> m > n, inrange(tree, X[n], rcutoff, true))
        j[n] = zeros(Int64, length(neighbors))
        R[n] = zeros(Float64, length(neighbors))
        r[n] = zeros(SVector{3,Float64}, length(neighbors))
        for (i, m) in enumerate(neighbors)
            rr = get_displacement(L, X[n], X[m])
            j[n][i] = m
            R[n][i] = norm(rr)
            r[n][i] = rr
        end
    end
    NeighborList(j, R, r)
end
