
<div align="center">

<img src ="./img/hackerank.png">
</div>

# Challenge: Plus Minus





Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with **6** places after the decimal.

**Note:** This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to

are acceptable.


**Example:**
```arr = [1,1,0,-1,-1]```
There are  *n = 5* elements, two positive, two negative and one zero. Their ratios are **2/5 =0.4000, 2/5=0.40000** , and **1/5=02.0000**

## Results are printed as:

```
0.400000
0.400000
0.200000
```

## Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

    int arr[n]: an array of integers

**Print**
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with **6** digits after the decimal. The function should not return a value.

## Input Format

The first line contains an integer,
, the size of the array.
The second line contains space-separated integers that describe


## Output Format

**Print** the following **3**
lines, each to **6** decimals:

    1.proportion of positive values
    2.proportion of negative values
    3.proportion of zeros

## Sample Input
```
STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
```

## Sample Output
```
0.500000
0.333333
0.166667
```
Explanation

There are **3** positive numbers, **2** negative numbers, and **1** zero in the array.
The proportions of occurrence are positive: , negative: and zeros: .

<p align="center">
    <a href="https://www.linkedin.com/in/deivid-martins1994/">
  	<img alt ="linkedn" src ="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/deivid94">
  <img alt="github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://www.hackerrank.com/md031194">
  <img alt="hackerrank" src="https://img.shields.io/badge/-Hackerrank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white"> 
</p>