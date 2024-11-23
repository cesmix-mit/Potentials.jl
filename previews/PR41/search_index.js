var documenterSearchIndex = {"docs":
[{"location":"api/#API-Reference","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"This page provides a list of all documented types and functions and in InteratomicPotentials.jl.","category":"page"},{"location":"api/","page":"API Reference","title":"API Reference","text":"If you are looking for more specifics on the InteratomicPotentials Interface, see the InteratomicPotentials Interface page.","category":"page"},{"location":"api/","page":"API Reference","title":"API Reference","text":"Modules = [InteratomicPotentials]\nOrder   = [:type, :function, :constant]","category":"page"},{"location":"api/#InteratomicPotentials.AbstractPotential","page":"API Reference","title":"InteratomicPotentials.AbstractPotential","text":"AbstractPotential\n\nThe abstract supertype of all interatomic potentials.\n\n\n\n\n\n","category":"type"},{"location":"api/#InteratomicPotentials.BornMayer","page":"API Reference","title":"InteratomicPotentials.BornMayer","text":"BornMayer{T<:AbstractFloat} <: EmpiricalPotential{NamedTuple{(:A, :ρ)},NamedTuple{(:rcutoff,)}}\n\nThe Born-Mayer-Huggins potential is a two-body intermolecular potential with five typical parameters, primarily describing the interaction of neutral atoms. Formally, the interaction between two atoms at a distance, r, is given by \n\neginequation\nV_LJ(r epsilon sigma rcutoff species) =\n    begincases \n    0  r  rcutoff \n    A e^fracsigma-rrho + left( fracCr right)^8 - left( fracDr right)  r  rcutoff\n    endcases\nndequation\n\nUsers must supply five parameters, A (units of energy), sigma (units of distance), rho (units of distance), C  D (units of energy times units of distance), and radial cutoff (units of distance).\n\n\n\n\n\n","category":"type"},{"location":"api/#InteratomicPotentials.Coulomb","page":"API Reference","title":"InteratomicPotentials.Coulomb","text":"Coulomb{T<:AbstractFloat} <: EmpiricalPotential{NamedTuple{()},NamedTuple{(:rcutoff,)}}\n\nThe Coulomb, or electrical potential is a simple two-body intermolecular potential that describes the electrical potential energy between two atoms with charge q_1 and q_2, at a distance r, is given by \n\neginequation\nV_LJ(r epsilon sigma rcutoff species) =\nbegincases \n    0  r  rcutoff \n    frack_e q_1 q_2r  r  rcutoff\nendcases\nndequation\n\nwhere k_e is known as Coulomb's constant.\n\nUsers must supply the electric charges of the atoms, q_1 and q_2, and the radial cutoff.\n\n\n\n\n\n","category":"type"},{"location":"api/#InteratomicPotentials.EmpiricalPotential","page":"API Reference","title":"InteratomicPotentials.EmpiricalPotential","text":"EmpiricalPotential{P<:NamedTuple,HP<:NamedTuple} <: TrainablePotential{P,HP}\n\nDefines an empirical potential, a heuristic function used to describe the intermolecular potential energy of a configuration of atoms. Various potentials have been found to agree empirically with the experimentally obtained potential energy of a configuration of atoms for particular atoms in particular situations. This package implements a number of such popular potentials.\n\nP is a NamedTuple of parameter names and HPis aNamedTuple`` of hyperparameter names.\n\n\n\n\n\n","category":"type"},{"location":"api/#InteratomicPotentials.LennardJones","page":"API Reference","title":"InteratomicPotentials.LennardJones","text":"LennardJones{T<:AbstractFloat} <: EmpiricalPotential{NamedTuple{(:ϵ, :σ)},NamedTuple{(:rcutoff,)}}\n\nThe Lennard-Jones potential is a simple two-body intermolecular potential with two typical parameters, primarily describing the interaction of neutral atoms. Formally, the interaction between two atoms at a distance, r, is given by \n\neginequation\nV_LJ(r epsilon sigma rcutoff species) =\n    egincases \n        0  r  rcutoff \n        4epsilon lbrack fracsigmar)^12 - (fracsigmar)^6 rbrack  r  rcutoff\n    ndcases\nndequation\n\nUsers must supply two parameters, epsilon (units of energy), sigma (units of distance), and radial cutoff (units of distance).\n\n\n\n\n\n","category":"type"},{"location":"api/#InteratomicPotentials.LinearCombinationPotential","page":"API Reference","title":"InteratomicPotentials.LinearCombinationPotential","text":"LinearCombinationPotential <: MixedPotential\n\nA potential which represents the linear combination of multiple sub-potentials. Performing algebraic operations on any AbstractPotential will create a potential of this type.\n\n\n\n\n\n","category":"type"},{"location":"api/#InteratomicPotentials.MixedPotential","page":"API Reference","title":"InteratomicPotentials.MixedPotential","text":"MixedPotential <: AbstractPotential\n\nAbstract type for potentials that are the combination of multiple sub-potentials.\n\n\n\n\n\n","category":"type"},{"location":"api/#InteratomicPotentials.Morse","page":"API Reference","title":"InteratomicPotentials.Morse","text":"Morse{T<:AbstractFloat} <: EmpiricalPotential{NamedTuple{(:D, :α, :σ)},NamedTuple{(:rcutoff,)}}\n\nThe Morse potential is a simple two-body intermolecular potential with three typical parameters, primarily describing the interaction of neutral atoms with more complex bond interactions. Formally, the interaction between two atoms at a distance, r, is given by \n\neginequation\nV_M(r D alpha sigma rcutoff species) =\n    egincases \n    0  r  rcutoff \n    D left( 1 - e^alpha(r - sigma)\right)^2  r  rcutoff\n    ndcases\nndequation\n\nUsers must supply three parameters, D (units of energy), alpha (units of inverse distance), ''\\sigma'' (units of distance), and radial cutoff (units of distance).\n\n\n\n\n\n","category":"type"},{"location":"api/#InteratomicPotentials.NonTrainablePotential","page":"API Reference","title":"InteratomicPotentials.NonTrainablePotential","text":"NonTrainablePotential <: AbstractPotential\n\nAbstract type for potentials that aren't trainable.\n\n\n\n\n\n","category":"type"},{"location":"api/#InteratomicPotentials.TrainablePotential","page":"API Reference","title":"InteratomicPotentials.TrainablePotential","text":"TrainablePotential{P<:NamedTuple,HP<:NamedTuple} <: AbstractPotential\n\nAbstract type for potentials that are trainable. P is a NamedTuple of parameter names and HPis aNamedTuple`` of hyperparameter names.\n\n\n\n\n\n","category":"type"},{"location":"api/#InteratomicPotentials.ZBL","page":"API Reference","title":"InteratomicPotentials.ZBL","text":"ZBL{T<:AbstractFloat} <: EmpiricalPotential{NamedTuple{()},NamedTuple{(:rcutoff,)}}\n\n#TODO: DALLAS The Ziegler-Biersack-Littmark (ZBL) screened nuclear repulsion for describing high-energy collisions between atoms.\n\n\n\n\n\n","category":"type"},{"location":"api/#InteratomicPotentials.deserialize_hyperparameters","page":"API Reference","title":"InteratomicPotentials.deserialize_hyperparameters","text":"deserialize_hyperparameters(p::P<:AbstractPotential, hyperparameters::AbstractVector{<:AbstractFloat})::P\n\nGenerate a new potential of the same type as an exising potential but with modified trainable hyperparameters. This function takes in the trainable hyperparameters as a Vector in the same form as produced by serialize_hyperparameters(p).\n\nFor a TrainablePotential{P,HP}, the function converts the Vector of hyperparameters into the type parameter HP then calls the set_hyperparameters implementation. Note that this behavior should be overloaded for a potential type that has any non-scalar trainable hyperparameters. For a NonTrainablePotential, the function returns the original potential, unchanged.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.deserialize_parameters","page":"API Reference","title":"InteratomicPotentials.deserialize_parameters","text":"deserialize_parameters(p::P<:AbstractPotential, parameters::AbstractVector{<:AbstractFloat})::P\n\nGenerate a new potential of the same type as an exising potential but with modified trainable parameters. This function takes in the trainable parameters as a Vector in the same form as produced by serialize_parameters(p).\n\nFor a TrainablePotential{P,HP}, the function converts the Vector of parameters into the type parameter P then calls the set_parameters implementation. Note that this behavior should be overloaded for a potential type that has any non-scalar trainable parameters. For a NonTrainablePotential, the function returns the original potential, unchanged.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.energy_and_force","page":"API Reference","title":"InteratomicPotentials.energy_and_force","text":"energy_and_force(s::AbstractSystem, p::AbstractPotential)::NamedTuple{(:e, :f), Tuple{Unitful.Energy,Vector{SVector{3, Unitful.Force}}}}\n\nCalculate the unit-annotated potential energy of a system and the force acting on each particle in a system using the provided interatomic potential. This combined function is offered because it is usually more efficient to calculate both properties simultaneously.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.force","page":"API Reference","title":"InteratomicPotentials.force","text":"force(s::AbstractSystem, p::AbstractPotential)::Vector{SVector{3, Unitful.Force}}\n\nCalculate the unit-annotated force acting on each particle in a system using the provided interatomic potential. The default implementation uses the :f property of energy_and_force(s,p).\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.get_hyperparameters","page":"API Reference","title":"InteratomicPotentials.get_hyperparameters","text":"get_hyperparameters(p::AbstractPotential)::NamedTuple\n\nRetrieve a NamedTuple with the trainable hyperparameters of a potential.\n\nFor a TrainablePotential{P,HP}, the function automatically extracts the fields with names in the type parameter HP. For a NonTrainablePotential, the function returns an empty NamedTuple.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.get_parameters","page":"API Reference","title":"InteratomicPotentials.get_parameters","text":"get_parameters(p::AbstractPotential)::NamedTuple\n\nRetrieve a NamedTuple with the trainable parameters of a potential.\n\nFor a TrainablePotential{P,HP}, the function automatically extracts the fields with names in the type parameter P. For a NonTrainablePotential, the function returns an empty NamedTuple.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.get_rcutoff","page":"API Reference","title":"InteratomicPotentials.get_rcutoff","text":"get_rcutoff(p::AbstractPotential)::AbstractFloat\n\nRetrieve the radius cutoff for the provided potential. This is the cutoff used for neighbor list calculations. (i.e. Any pairs beyond this cutoff will be ignored.) Defaults to Inf if a potential type does not implement a custom method.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.get_species","page":"API Reference","title":"InteratomicPotentials.get_species","text":"get_species(p::AbstractPotential)::Union{Tuple,Missing}\n\nRetrieve the species to be included in an interaction (pairs including a species not in the list are ignored). A value of missing indicates that all species should be included, which is the default behavior if a potential type does not implement a custom method.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.potential_energy","page":"API Reference","title":"InteratomicPotentials.potential_energy","text":"potential_energy(s::AbstractSystem, p::AbstractPotential)::Unitful.Energy\n\nCalculate the unit-annotated potential energy of a system using the provided interatomic potential. The default implementation uses the :e property of energy_and_force(s,p).\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.serialize_hyperparameters","page":"API Reference","title":"InteratomicPotentials.serialize_hyperparameters","text":"serialize_hyperparameters(p::AbstractPotential)::Vector{<:AbstractFloat}\n\nGenerate a Vector form of the trainable hyperparameters of a potential.\n\nFor a TrainablePotential{P,HP}, the function automatically extracts the fields with names in the type parameter HP and collects them into a Vector. Note that this behavior should be overloaded for a potential type that has any non-scalar trainable hyperparameters. For a NonTrainablePotential, the function returns an empty Vector.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.serialize_parameters","page":"API Reference","title":"InteratomicPotentials.serialize_parameters","text":"serialize_parameters(p::AbstractPotential)::Vector{<:AbstractFloat}\n\nGenerate a Vector form of the trainable parameters of a potential.\n\nFor a TrainablePotential{P,HP}, the function automatically extracts the fields with names in the type parameter P and collects them into a Vector. Note that this behavior should be overloaded for a potential type that has any non-scalar trainable parameters. For a NonTrainablePotential, the function returns an empty Vector.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.set_hyperparameters","page":"API Reference","title":"InteratomicPotentials.set_hyperparameters","text":"set_hyperparameters(p::P<:AbstractPotential, hyperparameters::NamedTuple)::P\n\nGenerate a new potential of the same type as an exising potential but with modified trainable hyperparameters.\n\nFor a TrainablePotential{P,HP}, the function copies over all fields and replaces the fields from the type parameter HP. For a NonTrainablePotential, the function returns the original potential, unchanged.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.set_parameters","page":"API Reference","title":"InteratomicPotentials.set_parameters","text":"set_parameters(p::P<:AbstractPotential, parameters::NamedTuple)::P\n\nGenerate a new potential of the same type as an exising potential but with modified trainable parameters.\n\nFor a TrainablePotential{P,HP}, the function copies over all fields and replaces the fields from the type parameter P. For a NonTrainablePotential, the function returns the original potential, unchanged.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.virial","page":"API Reference","title":"InteratomicPotentials.virial","text":"virial(s::AbstractSystem, p::AbstractPotential)::Unitful.Energy\n\nCalculate the unit-annotated virial of a system, officially calculated as the trace contraction of the sum of radial-force outerproducts: trleft( sum r_ij bigotimes F_ij right)\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.virial_stress","page":"API Reference","title":"InteratomicPotentials.virial_stress","text":"virial_stress(s::AbstractSystem, p::AbstractPotential)::SVector{6,Unitful.Energy}\n\nCalculate the unit-annotated virial stress tensor of a system, officially calculated as the sum of radial-force outerproducts: sum r_ij bigotimes F_ij, only returns the unique lower-diagonal components.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.kₑ","page":"API Reference","title":"InteratomicPotentials.kₑ","text":"Coulomb constant in atomic units. https://en.wikipedia.org/wiki/Coulomb_constant\n\n\n\n\n\n","category":"constant"},{"location":"api/#InteratomicPotentials.ϵ₀","page":"API Reference","title":"InteratomicPotentials.ϵ₀","text":"Vacuum permittivity in atomic units. https://en.wikipedia.org/wiki/Vacuum_permittivity\n\n\n\n\n\n","category":"constant"},{"location":"interface/#InteratomicPotentials-Interface","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"","category":"section"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"<!– TODO (Dallas): write explanation of how to create new potentials of various types example: https://cesmix-mit.github.io/Atomistic.jl/dev/interface/ –>","category":"page"},{"location":"interface/#Instantiating-a-Built-In-Interatomic-Potentials","page":"InteratomicPotentials Interface","title":"Instantiating a Built-In Interatomic Potentials","text":"","category":"section"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"There are a number of built-in interatomic potentials that are available for users: Born-Mayer-Huggins, Lennard-Jones, Coulomb's Law, and Morse. These potentials are subtypes of EmpiricalPotential. There are additional basis potentials, the Spectral Neighbor Analysis Potential and Atomic Cluster Expansion, available in the related package InteratomicBasisPotentials.jl. In order to instantiate a potential, you need to provide the necessary potential parameters (see API documentation), radial cutoff, and species (i.e. elements) for which the potential is defined for.","category":"page"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"Below is an example for the Lennard-Jones potential:","category":"page"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"ϵ = 0.1034 * u\"eV\"\nσ = 1.0 * u\"Å\"\nrcutoff = 4.0 * σ\nspecies = [:Ar, ]\nlj = LennardJones(ϵ, σ, rcutoff, species)","category":"page"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"In general, empirical potentials handles have the signature:","category":"page"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"CustomPotential{T<:AbstractFloat} <: EmpiricalPotential{NamedTuple{(:a, :b, ..., :e)},NamedTuple{(:rcutoff,)}}\n# where parameters are :a, :b, ..., :e","category":"page"},{"location":"interface/#Evaluating-Interatomic-Potentials","page":"InteratomicPotentials Interface","title":"Evaluating Interatomic Potentials","text":"","category":"section"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"There are a number of signatures for evaluating the potential energy, force, and virial stress for the interatomic potentials. For most users it will be most convenient in order to define a configuration in terms of an AtomsBase.jl system (i.e., using a FlexibleSystem), which requires a list of atoms, boundary conditions, and box information. With such a system, evaluating the potential energy and force are straightforward:","category":"page"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"system = FlexibleSystem(atoms, boundary_conditions, box)\nenergy, force = energy_and_force(system, lj) # Efficient implementation of energy and force calculation\nvs = virial_stress(system, lj)","category":"page"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"where the abstract signatures are","category":"page"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"energy_and_force(s::AbstractSystem, p::EmpiricalPotential) :: (Unitful.Energy, SVector{n, SVector{3, Unitful.Force}})\nvirial_stress(s::AbstractSystem, p::EmpiricalPotential) :: SVector{6, Unitful.Energy}\nvirial(s::AbstractSystem, p::EmpiricalPotential) :: Unitful.Energy","category":"page"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"where n is the number of atoms in the configuration.","category":"page"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"Convenience functions exist that return energy and forces alone,","category":"page"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"# Compute both, at the cost of additional neighborlist iterations\npotential_energy(s::AbstractSystem, p::EmpiricalPotential) :: Unitful.Energy\nforce(s::AbstractSystem, p::EmpiricalPotential) :: SVector{n, SVector{3, Unitful.Force}}","category":"page"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"There are also convenience functions that allow the evaluation of the interatomic potentials as a function of radial distance (where appropriate, for two body potentials), without unitful annotations.","category":"page"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"# Compute both, at the cost of additional neighborlist iterations\npotential_energy(R::AbstractFloat, p::EmpiricalPotential) :: AbstractFloat\nforce(R::AbstractFloat, r::SVector{3}, p::EmpiricalPotential) :: SVector{3}","category":"page"},{"location":"interface/#Manipulating-EmpircalPotentials","page":"InteratomicPotentials Interface","title":"Manipulating EmpircalPotentials","text":"","category":"section"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"MixedPotentials can be created by algebraically manipulating EmpiricalPotentials to create more complex interatomic potentials. To model a mixed configuration of Argon and Xenon potentials, each with their own Lennard-Jones potential and a separate Lennard-Jones potential that defines their interaction, use:","category":"page"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"lj1 = LennardJones(ϵ, σ, rcutoff, [:Ar, ]) # EmpiricalPotential\nlj2 = LennardJones(1.35ϵ, 2.0σ, rcutoff, [:Xe, ]) # EmpiricalPotential\nlj3 = LennardJones(2ϵ, 1.5σ, rcutoff, [:Ar, :Xe]) # EmpiricalPotential\nlj_sum = lj1+lj2+lj3 # MixedPotential","category":"page"},{"location":"interface/","page":"InteratomicPotentials Interface","title":"InteratomicPotentials Interface","text":"When evaluated using an AtomsBase.jl system, energies and forces are appropriately calculated.","category":"page"},{"location":"#InteratomicPotentials","page":"Home","title":"InteratomicPotentials","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"<!– TODO (Dallas): put README type details here example: https://cesmix-mit.github.io/Atomistic.jl/dev/ –>","category":"page"},{"location":"#Conventions","page":"Home","title":"Conventions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The unit convention throughout the package and other packages in the CESMIX Julia Suite is to assume all unspecified units to be atomic units as defined in the UnitfulAtomic.jl package. All exposed interfaces should allow for numeric or unitful input. For clarity's sake, it is strongly recommended that user code utilize Unitful wherever possible. Internally, InteratomicPotentials.jl will automatically convert these quantities to be compatible without a significant performance penalty.","category":"page"}]
}
