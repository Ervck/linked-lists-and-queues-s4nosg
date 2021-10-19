import * as React from 'react';
// import * as Exercises from './exercises';
import LinkedList from './LinkedList';
import LinkNode from './LinkNode';
import Queue from './Queue';
import copyQueue from './queuecopy';

import Test from './Test';
import TestSuite from './TestSuite';
import * as Exercises from './interview-questions';

const generateRandomNumberArray = (
  size: number,
  range: number = 100,
  offset: number = 50
) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.trunc(Math.random() * range - offset));
  }
  return arr;
};

const runTestQueue = (
  checkEmpty: boolean = false
): { front: string; start: string } | { q: Queue<string>; empty: boolean } => {
  const s = new Queue<string>();
  const arr = [];
  const testArr = ['bar', 'foo', 'react', 'computer', 'science', 'abc', '42'];
  const times = Math.trunc(Math.random() * 100);
  for (let i = 0; i < times; i++) {
    if (arr.length === 0 || Math.random() < 0.5) {
      const item = testArr[Math.floor(Math.random() * testArr.length)];
      s.enqueue(item);
      arr.push(item);
    } else {
      s.dequeue();
      arr.shift();
    }
  }

  if (!checkEmpty) {
    s.enqueue('top');
    arr.push('top');
    return { front: s.front.toString(), start: arr[0].toString() };
  } else {
    return { q: s, empty: arr.length === 0 };
  }
};

const isCopyQueue = (q: Queue<any>, t: Queue<any>): boolean => {
  while (!q.isEmpty() && !t.isEmpty() && q.front === t.front) {
    q.dequeue();
    t.dequeue();
  }

  return q.isEmpty() && t.isEmpty() && q !== t;
};

const createLinkedListFromArray = <T extends {}>(
  llArr: T[]
): LinkNode<T> | null => {
  if (llArr.length === 0) {
    return null;
  }
  const head = new LinkNode<T>(llArr[0], null);
  let currentNodeA = head;
  llArr.slice(1).forEach((x) => {
    currentNodeA.next = new LinkNode<T>(x, null);
    currentNodeA = currentNodeA.next;
  });

  return head;
};

const createLinkedListWithCycleFromArray = <T extends {}>(
  llArr: T[],
  startCycleIndex: number
): LinkNode<T> | null => {
  const llFromArr = createLinkedListFromArray(llArr);

  if (startCycleIndex >= llArr.length) {
    return llFromArr;
  }

  let startOfCycle = llFromArr;
  let tail = llFromArr;

  for (let i = 0; i < startCycleIndex; i++) {
    startOfCycle = startOfCycle.next;
  }
  while (tail.next !== null) {
    tail = tail.next;
  }

  tail.next = startOfCycle;

  return llFromArr;
};

const nodeAt = <T extends {}>(
  ll: LinkNode<T> | null,
  index: number
): LinkNode<T> | null => {
  let currentNode = ll;
  for (let i = 0; i < index && currentNode !== null; i++) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

const valueAtOrNull = <T extends {}>(node: LinkNode<T> | null): string =>
  node ? node.value.toString() : '';

const createLinkedListFromString = (s: string) =>
  createLinkedListFromArray(s.split(''));

const llToString = <T extends {}>(head: LinkNode<T>): string => {
  if (head === null) return '';
  else if (head.next === null) return head.value.toString();
  else return head.value.toString() + ',' + llToString(head.next);
};

const createTest = (testName, expected, actual) => {
  return <Test testname={testName} expected={expected} actual={actual} />;
};

const createTestSuite = (suiteName, tests) => {
  return <TestSuite suitename={suiteName}>{tests}</TestSuite>;
};

class ExerciseTests extends React.Component<any> {
  public render() {
    const sumListHead = new LinkNode<number>(0, null);
    const numOfElements = 2 * Math.trunc(Math.random() * 10);
    const middleList = [];
    for (let i = 0; i < numOfElements; i++) middleList.push('a' + i);

    let currentNode = sumListHead;

    let middleNodeHead = new LinkNode<string>('abc', null);
    let currentNodeA = middleNodeHead;
    let middleNodeA = middleNodeHead;
    middleList.forEach((x, index) => {
      currentNodeA.next = new LinkNode<string>(x, null);
      if (index === middleList.length / 2) middleNodeA = currentNodeA;
      currentNodeA = currentNodeA.next;
    });

    const l1 = new LinkedList<number>();
    const l4 = new LinkedList<number>();
    const arr1 = generateRandomNumberArray(7);
    arr1.forEach((x) => {
      currentNode.next = new LinkNode<number>(x, null);
      currentNode = currentNode.next;
    });
    const chosenIndex = Math.trunc(Math.random() * 5) + 1;
    arr1
      .slice()
      .reverse()
      .forEach((x) => {
        l1.insertAtFront(x);
        l4.insertAtFront(x);
      });
    const l2 = new LinkedList<string>();
    const arr2 = ['abcd', 'some', 'foo', 'hey there', 'foo'];
    const chosenIndex2 = Math.trunc(Math.random() * 3) + 1;
    const l3 = new LinkedList<string>();
    arr2
      .slice()
      .reverse()
      .forEach((x) => {
        l2.insertAtFront(x);
        l3.insertAtFront(x);
      });
    const arr3 = arr2.slice();
    l3.insert(0, 'add');
    arr3.unshift('add');
    l3.insert(arr3.length, 'end');
    arr3.push('end');
    const arr4 = arr1
      .slice(0, chosenIndex)
      .concat([42])
      .concat(arr1.slice(chosenIndex));
    l4.insert(chosenIndex, 42);

    const arr5 = arr2
      .slice()
      .concat(arr2.slice())
      .concat([arr2[1], arr2[1]])
      .concat(arr2.slice(1))
      .concat([arr2[0], arr2[0], arr2[0]]);
    const arr5RemoveDups = arr2.filter((s, index) => arr2.indexOf(s) === index);
    const l5 = new LinkedList<string>();
    const l6 = new LinkedList<string>();
    arr5
      .slice()
      .reverse()
      .forEach((x) => {
        l5.insertAtFront(x);
        l6.insertAtFront(x);
      });
    l5.removeDuplicates();
    const randomIndex = Math.trunc(Math.random() * arr5.length);
    const randomIndex2 = Math.trunc(Math.random() * arr5.length);
    const arr6 = arr5
      .slice()
      .filter((x, index) => index <= randomIndex || x !== arr5[randomIndex2])
      .filter((x, index) => index === 0 || x !== arr5[0]);
    l6.removeAll(arr5[randomIndex2], l6.nodeAt(randomIndex));
    l6.removeAll('abcd', l6.nodeAt(0));

    // Queue Tests

    const t1 = runTestQueue();
    const t2 = runTestQueue();

    const t3 = runTestQueue(true);
    const t4 = runTestQueue(true);

    const frontTest = new Queue<number>();
    const frontNum = Math.random();
    frontTest.enqueue(frontNum);
    frontTest.enqueue(Math.random());

    const singleNodeLLFront = new LinkedList<number>();
    const frontNumLL = Math.random();
    singleNodeLLFront.insertAtFront(frontNumLL);

    const singleNodeLLEnd = new LinkedList<number>();
    const frontNumLLEnd = Math.random();
    singleNodeLLEnd.insertAtEnd(frontNumLLEnd);

    const singleNodePopTest = new LinkedList<number>();
    const popTestNum = Math.random();
    singleNodePopTest.insertAtEnd(Math.random());
    singleNodePopTest.pop(0);
    singleNodePopTest.insertAtFront(popTestNum);

    const cpQueue = runTestQueue(true);
    if (cpQueue.q.isEmpty()) {
      cpQueue.q.enqueue(Math.random().toString());
    }

    const advanceListHead = new LinkNode<number>(0, null);
    const numOfAdvanceElements = 2 * Math.trunc(Math.random() * 10);
    const indexOfAdvanceElements = Math.trunc(
      Math.random() * numOfAdvanceElements
    );
    const advanceArr = [];
    for (let i = 0; i < numOfAdvanceElements; i++)
      advanceArr.push('a' + i + ':' + Math.random());
    const headAdvanceList = createLinkedListFromArray(advanceArr);

    const arrSumA = generateRandomNumberArray(8, 10, 0);
    const arrSumB = generateRandomNumberArray(8, 10, 0);
    let carry = 0;
    let arrSumAnswer = [];
    arrSumA.forEach((num: number, index: number) => {
      const sum = num + arrSumB[index] + carry;
      if (sum >= 10) {
        carry = 1;
      } else {
        carry = 0;
      }
      arrSumAnswer.push(sum % 10);
    });
    if (carry > 0) arrSumAnswer.push(1);
    let digitSumA = createLinkedListFromArray(arrSumA);
    let digitSumB = createLinkedListFromArray(arrSumB);
    let digitSum = createLinkedListFromArray(arrSumAnswer);

    const arrRemoveNodeArr = [
      'yo',
      'where',
      'did',
      'one',
      'of',
      'my',
      'nodes',
      'go?',
    ];
    const removeFirstNodeLL = createLinkedListFromArray(arrRemoveNodeArr);
    const removeLastNodeLL = createLinkedListFromArray(arrRemoveNodeArr);
    const removeRandomNodeLL = createLinkedListFromArray(arrRemoveNodeArr);
    const randomIndexRemoveNode =
      Math.trunc(Math.random() * (arrRemoveNodeArr.length - 2)) + 1;
    const arrRemoveNodeArrFirst = arrRemoveNodeArr.slice(1);
    const arrRemoveNodeArrLast = arrRemoveNodeArr.slice(
      0,
      arrRemoveNodeArr.length - 1
    );
    const arrRemoveNodeArrRandom = arrRemoveNodeArr
      .slice(0, randomIndexRemoveNode)
      .concat(arrRemoveNodeArr.slice(randomIndexRemoveNode + 1));

    Exercises.removeNode(removeFirstNodeLL);
    let removeLastNodeLLCurrent = removeLastNodeLL;
    for (let i = 0; i < arrRemoveNodeArr.length - 1; i++) {
      removeLastNodeLLCurrent = removeLastNodeLLCurrent.next;
    }

    Exercises.removeNode(removeLastNodeLLCurrent);

    let removeNodeLLRandomCurrent = removeRandomNodeLL;
    for (let i = 0; i < randomIndexRemoveNode; i++) {
      removeNodeLLRandomCurrent = removeNodeLLRandomCurrent.next;
    }

    Exercises.removeNode(removeNodeLLRandomCurrent);

    const cycleArr = ['cycle', 'from', 'the', 'start', 'and'];
    const cycleFromBeginning = createLinkedListWithCycleFromArray(cycleArr, 0);
    const cycleFromEnd = createLinkedListWithCycleFromArray(cycleArr, 4);
    const randomSizeCycle = Math.trunc(Math.random() * 20) + 1;
    const randomCycleStartIndex = Math.trunc(Math.random() * randomSizeCycle);
    const cycleNumArr = [];
    for (let i = 0; i < randomSizeCycle; i++) {
      cycleNumArr.push(Math.random());
    }
    const cycleNumLL = createLinkedListWithCycleFromArray(
      cycleNumArr,
      randomCycleStartIndex
    );

    return (
      <div>
        <TestSuite suitename="LinkedList Test">
          <Test
            testname="insertAtFront empty"
            expected={frontNumLL}
            actual={
              singleNodeLLFront.nodeAt(0) && singleNodeLLFront.nodeAt(0).value
                ? singleNodeLLFront.nodeAt(0).value
                : 'Error: No node'
            }
          />
          <Test
            testname="insertAtEnd empty"
            expected={frontNumLLEnd}
            actual={
              singleNodeLLEnd.nodeAt(0) && singleNodeLLEnd.nodeAt(0).value
                ? singleNodeLLEnd.nodeAt(0).value
                : 'Error: No node'
            }
          />
          <Test
            testname="indexOf test - present - end"
            expected={arr1.indexOf(arr1[arr1.length - 1])}
            actual={l1.indexOf(arr1[arr1.length - 1])}
          />
          <Test
            testname="indexOf test - present - start"
            expected={0}
            actual={l1.indexOf(arr1[0])}
          />
          <Test
            testname="indexOf test - present - somewhere"
            expected={chosenIndex}
            actual={l1.indexOf(arr1[chosenIndex])}
          />
          <Test
            testname="indexOf test not present"
            expected={-1}
            actual={l2.indexOf('yo')}
          />
          <Test
            testname="indexOf test present multi"
            expected={2}
            actual={l2.indexOf('foo')}
          />
          <Test
            testname="Empty LinkedList toString Test"
            expected=""
            actual={new LinkedList<boolean>().toString()}
          />
          <Test
            testname="number toString"
            expected={arr1.toString()}
            actual={l1.toString()}
          />
          <Test
            testname="nodeAt test"
            expected={l1.nodeAt(0) ? l1.nodeAt(0).next : 'ERROR: null node'}
            actual={l1.nodeAt(1)}
          />
          <Test
            testname="nodeAt test"
            expected={l1.nodeAt(0)}
            actual={l1.nodeAt(0)}
          />
          <Test
            testname="nodeAt test"
            expected={l1.nodeAt(2)}
            actual={l1.nodeAt(1) ? l1.nodeAt(1).next : 'ERROR: null node'}
          />
          <Test
            testname="nodeAt test last"
            expected={l1.nodeAt(6)}
            actual={l1.nodeAt(5) ? l1.nodeAt(5).next : 'ERROR: null node'}
          />
          <Test
            testname="nodeAt test"
            expected={arr1[chosenIndex]}
            actual={
              l1.nodeAt(chosenIndex)
                ? l1.nodeAt(chosenIndex).value
                : 'ERROR: null Node'
            }
          />
          <Test
            testname="nodeAt test"
            expected={arr2[chosenIndex2]}
            actual={
              l2.nodeAt(chosenIndex2)
                ? l2.nodeAt(chosenIndex2).value
                : 'ERROR: null Node'
            }
          />
          <Test
            testname="itemAt test"
            expected={arr2[chosenIndex2]}
            actual={l2.itemAt(chosenIndex2)}
          />
          <Test
            testname="itemAt test"
            expected={arr1[0]}
            actual={l1.itemAt(0)}
          />
          <Test
            testname="itemAt test"
            expected={arr1[arr1.length - 1]}
            actual={l1.itemAt(arr1.length - 1)}
          />
          <Test
            testname="Empty linked list length"
            expected={0}
            actual={new LinkedList<boolean>().length}
          />
          <Test testname="Linked list length" expected={7} actual={l1.length} />
          <Test
            testname="Linked list 1 node pop test"
            expected={popTestNum}
            actual={singleNodePopTest.pop(0)}
          />
          <Test
            testname="Linked list pop now empty"
            expected={''}
            actual={singleNodePopTest.toString()}
          />
          <Test
            testname="Linked list pop test"
            expected={arr2[0]}
            actual={l2.pop(0)}
          />
          <Test
            testname="Linked list pop test"
            expected={arr2[1]}
            actual={l2.itemAt(0)}
          />
          <Test
            testname="Linked list pop test"
            expected={arr2[arr2.length - 1]}
            actual={l2.pop(arr2.length - 2)}
          />
          <Test
            testname="Linked list pop test"
            expected={arr2.slice(1, arr2.length - 1).toString()}
            actual={l2.toString()}
          />
          <Test
            testname="Linked list pop test"
            expected={arr1[chosenIndex]}
            actual={l1.pop(chosenIndex)}
          />
          <Test
            testname="Linked list pop test"
            expected={arr1
              .slice(0, chosenIndex)
              .concat(arr1.slice(chosenIndex + 1))
              .toString()}
            actual={l1.toString()}
          />
          <Test
            testname="Linked list insert test"
            expected={arr3.toString()}
            actual={l3.toString()}
          />
          <Test
            testname="Linked list insert test"
            expected={arr4.toString()}
            actual={l4.toString()}
          />

          <Test
            testname="Linked list remove all"
            expected={arr6.toString()}
            actual={l6.toString()}
          />
          <Test
            testname="Linked list remove duplicates"
            expected={arr5RemoveDups.toString()}
            actual={l5.toString()}
          />
          <Test
            testname="Linked list remove duplicates - empty"
            expected={''}
            actual={new LinkedList<boolean>().toString()}
          />
        </TestSuite>
        <br />
        <TestSuite suitename="Queue Test">
          <Test testname="front" expected={frontNum} actual={frontTest.front} />
          <Test
            testname="random dequeue/enqueue"
            expected={t1.start}
            actual={t1.front}
          />
          <Test
            testname="random dequeue/enqueue"
            expected={t2.start}
            actual={t2.front}
          />
          <Test
            testname="new Queue empty"
            expected={true}
            actual={new Queue<boolean>().isEmpty()}
          />
          <Test
            testname="Queue random empty"
            expected={t3.empty}
            actual={t3.q.isEmpty()}
          />
          <Test
            testname="Queue random empty"
            expected={t4.empty}
            actual={t4.q.isEmpty()}
          />
        </TestSuite>
        <br />
        <TestSuite suitename="Queue Copy">
          <Test
            testname="empty Queue copy"
            expected="true"
            actual={isCopyQueue(
              copyQueue(new Queue<boolean>()),
              new Queue<boolean>()
            ).toString()}
          />
          <Test
            testname="random queue copy from queue"
            expected={true}
            actual={isCopyQueue(copyQueue(cpQueue.q), cpQueue.q)}
          />
          <Test
            testname="random queue copy from queue"
            expected={cpQueue.q.front}
            actual={copyQueue(cpQueue.q).front}
          />
        </TestSuite>
        <br />
        {createTestSuite('Sum', [
          createTest(
            'Sum - forward recursive',
            arr1.reduce((acc, a) => acc + a),
            Exercises.sumForwardRecursive(sumListHead)
          ),
          createTest(
            'Sum - loop',
            arr1.reduce((acc, a) => acc + a),
            Exercises.sumLoop(sumListHead)
          ),
          createTest(
            'Sum - backward recursive',
            arr1.reduce((acc, a) => acc + a),
            Exercises.sumBackwardRecursive(sumListHead)
          ),
        ])}
        <br />
        {createTestSuite('Advance Node', [
          createTest(
            'Forward recursive',
            nodeAt(headAdvanceList, indexOfAdvanceElements).value,
            valueAtOrNull(
              Exercises.advanceNodeForwardRecursive(
                headAdvanceList,
                indexOfAdvanceElements
              )
            )
          ),
          createTest(
            'Loop',
            nodeAt(headAdvanceList, indexOfAdvanceElements).value,
            valueAtOrNull(
              Exercises.advanceNodeForLoop(
                headAdvanceList,
                indexOfAdvanceElements
              )
            )
          ),
          createTest(
            'Backward recursive',
            nodeAt(headAdvanceList, indexOfAdvanceElements).value,
            valueAtOrNull(
              Exercises.advanceNodeBackwardRecursive(
                headAdvanceList,
                indexOfAdvanceElements
              )
            )
          ),
        ])}
        <br />
        {createTestSuite('Middle Node', [
          createTest(
            'Middle node ' +
              middleNodeA.value +
              ',' +
              (Exercises.middleNode(middleNodeHead)
                ? Exercises.middleNode(middleNodeHead).value
                : 'null'),
            middleNodeA,
            Exercises.middleNode(middleNodeHead)
          ),
        ])}
        <br />
        {createTestSuite('Sum Two Lists', [
          createTest(
            'Sum Two Lists Random ' +
              llToString(digitSumA) +
              '/' +
              llToString(digitSumB),
            llToString(digitSum),
            llToString(Exercises.sumLists(digitSumA, digitSumB))
          ),
          createTest(
            'Sum Two Lists Unequal ' +
              llToString(createLinkedListFromArray([9, 7, 4, 8, 2])) +
              '/' +
              llToString(createLinkedListFromArray([5, 1])),
            [4, 9, 4, 8, 2].toString(),
            llToString(
              Exercises.sumLists(
                createLinkedListFromArray([9, 7, 4, 8, 2]),
                createLinkedListFromArray([5, 1])
              )
            )
          ),
          createTest(
            'Sum Two Lists Unequal ' +
              llToString(createLinkedListFromArray([5, 1])) +
              '/' +
              llToString(createLinkedListFromArray([9, 7, 4, 8, 2])),
            [4, 9, 4, 8, 2].toString(),
            llToString(
              Exercises.sumLists(
                createLinkedListFromArray([5, 1]),
                createLinkedListFromArray([9, 7, 4, 8, 2])
              )
            )
          ),
          createTest(
            'Carry Extra Node ' +
              llToString(createLinkedListFromArray([5, 1, 4, 9])) +
              '/' +
              llToString(createLinkedListFromArray([9, 8, 5])),
            [4, 0, 0, 0, 1].toString(),
            llToString(
              Exercises.sumLists(
                createLinkedListFromArray([5, 1, 4, 9]),
                createLinkedListFromArray([9, 8, 5])
              )
            )
          ),
        ])}
        <br />
        {createTestSuite('RemoveNode', [
          createTest(
            'Remove first node ',
            llToString(createLinkedListFromArray(arrRemoveNodeArrFirst)),
            llToString(removeFirstNodeLL)
          ),
          //createTest("Remove last node ", llToString(createLinkedListFromArray(arrRemoveNodeArrLast)), llToString(removeLastNodeLL)),
          createTest(
            'Remove random node ' + randomIndexRemoveNode,
            llToString(createLinkedListFromArray(arrRemoveNodeArrRandom)),
            llToString(removeRandomNodeLL)
          ),
        ])}
        <br />
        {createTestSuite('isPalindrome', [
          createTest(
            'd',
            true,
            Exercises.isListPalindrome(createLinkedListFromString('d'))
          ),
          createTest(
            'racecar',
            true,
            Exercises.isListPalindrome(createLinkedListFromString('racecar'))
          ),
          createTest(
            'racecars',
            false,
            Exercises.isListPalindrome(createLinkedListFromString('racecars'))
          ),
          createTest(
            'abcdeedcba',
            true,
            Exercises.isListPalindrome(createLinkedListFromString('abcdeedcba'))
          ),
          createTest(
            'notapalindromeordnilapaton',
            false,
            Exercises.isListPalindrome(
              createLinkedListFromString('notapalindromeordnilapaton')
            )
          ),
        ])}
        <br />
        {createTestSuite('startNodeOfCycle', [
          createTest(
            'cycle one node ',
            'foo',
            valueAtOrNull(
              Exercises.startNodeOfCycle(
                createLinkedListWithCycleFromArray(['foo'], 0)
              )
            )
          ),
          createTest(
            'cycle from beginning ',
            cycleFromBeginning.value,
            Exercises.startNodeOfCycle(cycleFromBeginning).value
          ),
          createTest(
            'cycle from end ',
            nodeAt(cycleFromEnd, cycleArr.length - 1).value,
            Exercises.startNodeOfCycle(cycleFromEnd).value
          ),
          createTest(
            'cycle random ',
            nodeAt(cycleNumLL, randomCycleStartIndex).value,
            Exercises.startNodeOfCycle(cycleNumLL).value
          ),
          //createTest("test", cycleNumArr.length, randomCycleStartIndex)
        ])}
      </div>
    );
  }
}

export default ExerciseTests;
