let bars = []; 

function generateBars() {
    const barsContainer = document.getElementById('bars-container');
    barsContainer.innerHTML = '';

    for (const barValue of bars) {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${barValue * 10}px`;
        barsContainer.appendChild(bar);
    }
}

function randomizeBars() {
    bars = Array.from({ length: 10 }, () => Math.floor(Math.random() * 30) + 1);
    generateBars();
}

function selectionSort() {
    const len = bars.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (bars[j] < bars[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            
            [bars[i], bars[minIndex]] = [bars[minIndex], bars[i]];
        }
    }
}

function selectionSort() {
    const len = bars.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (bars[j] < bars[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
           
            [bars[i], bars[minIndex]] = [bars[minIndex], bars[i]];
        }
    }
}
function bubbleSort() {
    const len = bars.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (bars[j] > bars[j + 1]) {
               
                [bars[j], bars[j + 1]] = [bars[j + 1], bars[j]];
            }
        }
    }
}

function quickSort() {
    if (bars.length <= 1) {
        return bars;
    }

    const pivot = bars[0];
    const left = [];
    const right = [];

    for (let i = 1; i < bars.length; i++) {
        if (bars[i] < pivot) {
            left.push(bars[i]);
        } else {
            right.push(bars[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}
function mergeSort() {
    if (bars.length <= 1) {
        return bars;
    }

    const mid = Math.floor(bars.length / 2);
    const left = bars.slice(0, mid);
    const right = bars.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function shellSort() {
    const len = bars.length;
    let gap = Math.floor(len / 2);

    while (gap > 0) {
        for (let i = gap; i < len; i++) {
            let temp = bars[i];
            let j = i;

            while (j >= gap && bars[j - gap] > temp) {
                bars[j] = bars[j - gap];
                j -= gap;
            }

            bars[j] = temp;
        }

        gap = Math.floor(gap / 2);
    }
}



function applySorting(algorithm) {
    switch (algorithm) {
        case 'insertion':
            selectionSort();
            break;
        case 'selection':
            selectionSort();
            break;
        case 'bubble':
            bubbleSort();
            break;
        case 'quick':
             quickSort();
            break;
        case 'merge':
           mergeSort();
            break;
        case 'shell':
            shellSort();
            break;
        default:
            console.error('Invalid sorting algorithm');
    }

   
    generateBars();
}


randomizeBars();
