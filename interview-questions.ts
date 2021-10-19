import LinkNode from './LinkNode';

// Warm-up exercises

/**
 * Get sum of values of LinkedList with a head of first
 * @param first - head of LinkedList for which to take sum
 * @returns sum of all Nodes' values from LinkedList starting with first
 */
export const sumForwardRecursive = (first: LinkNode<number>): number => {
  
  const makeTable = (current, sumSoFar) => {

  if (current != null)
  
  return makeTable(current.next, sumSoFar+current.Value)

  else 
  
  return sumSoFar;

  };
     
  return makeTable(first, 0);

};

export const sumLoop = (first: LinkNode<number>): number => {
  return 0;
};

export const sumBackwardRecursive = (first: LinkNode<number>): number => {
  return 0;
};

/**
 * Gets Node (not item) at given index, used as helper function
 * @param head - the Node at index 0
 * @param index - the index of the Node to get
 * @returns Node at given index
 */
export const advanceNodeForwardRecursive = <T extends {}>(
  head: LinkNode<T> | null,
  index: number
): LinkNode<T> => {
  return new LinkNode<T>(
    Object(42) as T,
    new LinkNode<T>(
      Object(43) as T,
      new LinkNode<T>(
        Object(44) as T,
        new LinkNode<T>(
          Object(45) as T,
          new LinkNode<T>(
            Object(46) as T,
            new LinkNode<T>(
              Object(47) as T,
              new LinkNode<T>(Object(48) as T, null)
            )
          )
        )
      )
    )
  );
};

export const advanceNodeForLoop = <T>(
  head: LinkNode<T> | null,
  index: number
): LinkNode<T> => {
  return new LinkNode<T>(
    Object(42) as T,
    new LinkNode<T>(
      Object(43) as T,
      new LinkNode<T>(
        Object(44) as T,
        new LinkNode<T>(
          Object(45) as T,
          new LinkNode<T>(
            Object(46) as T,
            new LinkNode<T>(
              Object(47) as T,
              new LinkNode<T>(Object(48) as T, null)
            )
          )
        )
      )
    )
  );
};

export const advanceNodeBackwardRecursive = <T>(
  head: LinkNode<T> | null,
  index: number
): LinkNode<T> => {
  return new LinkNode<T>(
    Object(42) as T,
    new LinkNode<T>(
      Object(43) as T,
      new LinkNode<T>(
        Object(44) as T,
        new LinkNode<T>(
          Object(45) as T,
          new LinkNode<T>(
            Object(46) as T,
            new LinkNode<T>(
              Object(47) as T,
              new LinkNode<T>(Object(48) as T, null)
            )
          )
        )
      )
    )
  );
};

/**
 * Gets the middle Node of LinkedList with a head of first and odd number of Nodes
 * @param first - head of LinkedList for which to get the middle Node
 * @returns middle Node of LinkedList
 */
// HINT: Use the "runner technique" described in Cracking The Coding Interview,
// in which you keep track of two Nodes (a "slow" and a "fast" one).  Here,
// you'll want to return the "slow one" when the "fast one"
// reaches the end of the list
export const middleNode = <T>(first: LinkNode<T>): LinkNode<T> => {
  return new LinkNode<T>(
    Object(42) as T,
    new LinkNode<T>(
      Object(43) as T,
      new LinkNode<T>(
        Object(44) as T,
        new LinkNode<T>(
          Object(45) as T,
          new LinkNode<T>(
            Object(46) as T,
            new LinkNode<T>(
              Object(47) as T,
              new LinkNode<T>(Object(48) as T, null)
            )
          )
        )
      )
    )
  );
};

// Sample Interview Questions modified from Cracking the Coding Interview
// EXAMPLE
// Input: the node c from the linked list a -> b -> c -> d -> e -> f
// Result: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f
/**
 * Removes given Node from LinkedList assuming Node isn't the first one
 * @param removeNode - the Node to remove
 */
export const removeNode = <T>(removeNode: LinkNode<T>): void => {};

/**
 * Returns the kth to last Node in a LinkedList
 * @param first - the starting Node of the LinkedList
 * @param k - the number of the Node to remove counting from the end
 * @returns the kth to last Node
 */
export const kthToLast = <T>(first: LinkNode<T>, k: number): LinkNode<T> => {
  return new LinkNode<T>(
    Object(42) as T,
    new LinkNode<T>(
      Object(43) as T,
      new LinkNode<T>(
        Object(44) as T,
        new LinkNode<T>(
          Object(45) as T,
          new LinkNode<T>(
            Object(46) as T,
            new LinkNode<T>(
              Object(47) as T,
              new LinkNode<T>(Object(48) as T, null)
            )
          )
        )
      )
    )
  );
};

/**
 * Returns sum of two lists of numbers, stored in reverse order, such that the 1's digit is at the head of the list,
 * expressed in the same form as a linked list.
 * @param digitListA - list of digits of 1st number
 * @param digitsListB - list of digits of 2nd number
 * @returns head of list in same form (ones digit stored in first node)
 */
export const sumLists = (
  digitListA: LinkNode<number>,
  digitListB: LinkNode<number>
): LinkNode<number> => {
  return new LinkNode<number>(
    42,
    new LinkNode<number>(
      43,
      new LinkNode<number>(
        44,
        new LinkNode<number>(
          45,
          new LinkNode<number>(
            46,
            new LinkNode<number>(47, new LinkNode<number>(48, null))
          )
        )
      )
    )
  );
};

/**
 * Returns true exactly when LinkedList of characters is a palindrome
 * (i.e., when word reads same forwards as backwards)
 * @param charListHead - head of LinkedList
 * @returns true exactly when LinkedList of characters forms a palindrome
 */
export const isListPalindrome = (charListHead: LinkNode<string>): boolean => {
  return true;
};

/**
 * Given a linked list with a cycle, returns first Node of cycle
 * E.g., Given A -> B -> C -> D -> E -> F -> G -> C (same Node),
 * returns the node with the C
 * @param first - first Node of corrupt linked list
 * @returns first node of cycle
 */
export const startNodeOfCycle = <T>(first: LinkNode<T>): LinkNode<T> => {
  return new LinkNode<T>(
    Object(42) as T,
    new LinkNode<T>(
      Object(43) as T,
      new LinkNode<T>(
        Object(44) as T,
        new LinkNode<T>(
          Object(45) as T,
          new LinkNode<T>(
            Object(46) as T,
            new LinkNode<T>(
              Object(47) as T,
              new LinkNode<T>(Object(48) as T, null)
            )
          )
        )
      )
    )
  );
};
