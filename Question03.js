// 3. Maintenance Log Analysis (Segment Tree or Fenwick Tree)
// Problem Statement:
// Equip9 tracks equipment maintenance history. Each piece of equipment has a maintenance log with records of maintenance costs over time. Given multiple queries asking for the total maintenance cost in a specific date range, implement an efficient way to process these queries.
// Input:
// n (number of maintenance records)
// maintenance_logs (list of [equipment_id, date, cost] sorted by date)
// queries (list of [start_date, end_date] asking for total cost in that range)
// Output:
// Return a list of total maintenance costs for each query.
// Example Input:
// maintenance_logs = [(101, "2024-01-01", 500), (102, "2024-01-10", 300), (101, "2024-01-15", 700)]
// queries = [("2024-01-01", "2024-01-10"), ("2024-01-01", "2024-01-15")]

// Example Output:
// [800, 1500]  # Total maintenance cost in the given date range
