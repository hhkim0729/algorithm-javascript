function solution(n, k, enemy) {
  let result = 0;
  const heap = new MaxHeap();
  for (const e of enemy) {
    heap.push(e);
    n -= e;
    if (n < 0) {
      if (k <= 0) break;
      n += heap.pop();
      --k;
    }
    ++result;
  }
  return result;
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  push(v) {
    this.heap.push(v);
    let i = this.size() - 1;
    let parentI = Math.floor((i - 1) / 2);
    while (i > 0 && this.heap[i] > this.heap[parentI]) {
      this.swap(i, parentI);
      i = parentI;
      parentI = Math.floor((i - 1) / 2);
    }
  }

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const maxV = this.heap[0];
    this.heap[0] = this.heap.pop();

    let i = 0;
    while (i < this.size()) {
      const leftI = i * 2 + 1;
      const rightI = i * 2 + 2;
      let big = leftI;
      if (rightI < this.size() && this.heap[leftI] < this.heap[rightI]) {
        big = rightI;
      }
      if (this.heap[big] > this.heap[i]) {
        this.swap(big, i);
      }
      i = big;
    }

    return maxV;
  }
}
