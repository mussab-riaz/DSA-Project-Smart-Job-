
# SmartHire — DSA Backend

**Name:** Muhammad Mussab Riaz

## 1. Singly Linked List

**What it does in DSA:** Stores data in nodes, where each node points to the next node.

**Main work:** Insert, display, search, and delete records.

**How we use it in SmartHire:** Stores candidate records so the recruiter can manage them.

**Functions:**
- `addCandidate()` — adds a new candidate.
- `displayCandidates()` — displays all candidates.
- `searchCandidate()` — finds a candidate using their ID.
- `deleteCandidate()` — removes a candidate using their ID.

**Real-world example:** A recruiter adds Ali as a candidate. The linked list stores Ali's details, allows the recruiter to find him later, and can remove his record when required.

## 2. Queue (FIFO)

**What it does in DSA:** Stores items in First In, First Out (FIFO) order.

**Main work:** Add items at the rear and remove items from the front.

**How we use it in SmartHire:** Manages job applications in the order they are submitted.

**Functions:**
- `submitApplication()` — adds an application to the queue.
- `displayApplications()` — displays pending applications.
- `processNextApplication()` — processes the earliest pending application.

**Real-world example:** Ali submits his application before Ahmed. Ali's application is processed first because he joined the queue first.

## 3. Graph + BFS

**What it does in DSA:** A graph represents items as vertices (nodes) connected by edges. Breadth-First Search (BFS) visits connected vertices level by level.

**Main work:** Represent relationships and explore connected nodes.

**How we use it in SmartHire:** Represents connections between candidates and explores which candidates are reachable from a starting candidate.

**Functions:**
- `addGraphVertex()` — adds a candidate ID as a graph vertex.
- `addGraphEdge()` — connects two vertices.
- `bfsCandidates()` — visits connected vertices using BFS.

**Real-world example:** Ali is connected to Ahmed, and Ahmed is connected to Sara. BFS starts from Ali, visits Ahmed, and then reaches Sara.

## 4. Binary Search

**What it does in DSA:** Finds a target in a sorted collection by repeatedly dividing the search range in half.

**Main work:** Search efficiently without checking every item one by one.

**How we use it in SmartHire:** Searches for a job using its ID in a sorted array of job records.

**Function:**
- `binarySearchJob()` — searches for a job ID and displays the matching job.

**Real-world example:** A recruiter searches for job ID `103`. Binary search narrows the sorted list until it finds the DevOps Intern position.

**Important:** Binary search requires the data to be sorted by the searched value.

## 5. Hash Table

**What it does in DSA:** Stores key-value pairs and uses a hash function to calculate where a key should be stored.

**Main work:** Support fast insertion and lookup using a key.

**How we use it in SmartHire:** Uses a candidate's email to look up their candidate ID.

**Functions:**
- `insertCandidateHash()` — stores an email and candidate ID.
- `findCandidateByEmail()` — searches for a candidate using their email.

**Real-world example:** A recruiter enters `ali@example.com`. The hash table searches for that email and returns Ali's candidate ID.

**Important:** The implementation uses linear probing to handle collisions when two keys map to the same location.

## 6. Merge Sort

**What it does in DSA:** Sorts data using Divide and Conquer: divides the collection into smaller parts, sorts them, and merges the sorted parts.

**Main work:** Arrange records in a required order.

**How we use it in SmartHire:** Sorts candidate records by score, from highest to lowest.

**Functions:**
- `mergeSortCandidates()` — starts sorting and displays the results.
- `mergeSort()` — recursively divides and sorts the records.
- `merge()` — combines sorted parts in descending score order.

**Real-world example:** A recruiter wants to review the highest-scoring candidates first. Merge sort arranges the candidates by score so the strongest scores appear at the top.


