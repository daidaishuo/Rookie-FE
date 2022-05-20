// https://blog.csdn.net/weixin_45847735/article/details/121737885
// 父节点索引为：(i-1)/2
// 左孩子索引为：(i+1)*2-1
// 右孩子索引为：(i+1)*2
class MinHeap {
    heap = []

    swap(index1, index2) {
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    pop() {
        // pop()方法删除数组最后一个元素并返回，赋值给堆顶
        this.swap(0,this.heap.length-1)
        this.heap.pop()
        // 对堆顶重新排序
        this.shiftDown(0);
    }

    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }

    shiftUp(index) {
        let parentNodeIndex = (index - 1) >> 1
        if (index != 0 && this.heap[index] < this.heap[parentNodeIndex]){
            this.swap(parentNodeIndex, index)
            this.shiftUp(parentNodeIndex)
        }

    }

    shiftDown(index) {
        let leftNodeIndex = (index + 1) * 2 - 1,
            rightNodeIndex = (index + 1) * 2

        if(leftNodeIndex  < this.heap.length && this.heap[leftNodeIndex] < this.heap[index]) {
            this.swap(index, leftNodeIndex)
            this.shiftDown(leftNodeIndex)
        }
        if(rightNodeIndex < this.heap.length && this.heap[rightNodeIndex] < this.heap[index]) {
            this.swap(index, rightNodeIndex)
            this.shiftDown(rightNodeIndex)
        }
    }
}

class BigHeap {
    heap = []

    swap(index1, index2) {
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    pop() {
        // pop()方法删除数组最后一个元素并返回，赋值给堆顶
        this.swap(0,this.heap.length-1)
        this.heap.pop()
        // 对堆顶重新排序
        this.shiftDown(0);
    }

    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }

    shiftUp(index) {
        let parentNodeIndex = (index - 1) >> 1
        if (index != 0 && this.heap[index] > this.heap[parentNodeIndex]){
            this.swap(parentNodeIndex, index)
            this.shiftUp(parentNodeIndex)
        }

    }

    shiftDown(index) {
        let leftNodeIndex = (index + 1) * 2 - 1,
            rightNodeIndex = (index + 1) * 2

        if(leftNodeIndex  < this.heap.length && this.heap[leftNodeIndex] > this.heap[index]) {
            this.swap(index, leftNodeIndex)
            this.shiftDown(leftNodeIndex)
        }
        if(rightNodeIndex < this.heap.length && this.heap[rightNodeIndex] > this.heap[index]) {
            this.swap(index, rightNodeIndex)
            this.shiftDown(rightNodeIndex)
        }
    }
}
