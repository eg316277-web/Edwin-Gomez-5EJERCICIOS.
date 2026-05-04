import { maxSubArray } from './ejemplo26.js';
import { mergeSortedArrays } from './ejemplo27.js';
import { criba } from './ejemplo28.js';
import { matrixMultiplication } from './ejemplo29.js';
import { mergeSort } from './ejemplo30.js';

test('Pruebas Ejercicios 26-30', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]).maxSum).toBe(6);
    expect(mergeSortedArrays([1,3], [2,4])).toEqual([1,2,3,4]);
    expect(criba(10)).toEqual([2,3,5,7]);
    expect(matrixMultiplication([[1,2],[3,4]], [[5,6],[7,8]])).toEqual([[19,22],[43,50]]);
    expect(mergeSort([5,3,8,1,2])).toEqual([1,2,3,5,8]);
});
