// 1. Equipment Rental Availability (Graph Algorithm – BFS/DFS)
// Problem Statement:
// Equip9 manages a network of equipment rental providers. Each provider has connections with other providers, allowing customers to rent equipment even if their preferred provider does not have availability. Given a list of providers and their connections, determine the shortest path to find the nearest available equipment of a given type.
// Input:
// n (number of rental providers)
// edges (list of connections between providers as [providerA, providerB])
// availability (a dictionary {provider: [equipment_type1, equipment_type2, ...]})
// start_provider (the provider where the customer is searching)
// target_equipment (equipment type the customer needs)
// Output:
// Return the shortest path (minimum number of provider connections) to a provider that has the requested equipment. If no provider has it, return -1.
// Example Input:
var n = 5;
var edges = [(1, 2), (2, 3), (3, 4), (4, 5)];
var availability = {
  1: ["excavator"],
  2: [],
  3: ["bulldozer"],
  4: ["excavator"],
  5: ["crane"],
};
var start_provider = 2;
var target_equipment = "excavator";

// Example Output:
// [2, 3, 4]  # Shortest path to provider 4 with an excavator
