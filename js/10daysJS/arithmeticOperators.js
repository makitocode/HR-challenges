/**
 * Objective

In this challenge, we practice using arithmetic operators. Check out the attached tutorial for resources.

Task

Complete the following functions in the editor below:

getArea(length, width): Calculate and return the area of a rectangle having sides  and .
getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides  and .
The values returned by these functions are printed to stdout by locked stub code in the editor.

Input Format

image

image

Constraints

 and  are scaled to at most three decimal places.
Output Format

image

Sample Input 0

3
4.5
Sample Output 0

13.5
15
Explanation 0

The area of the rectangle is . lenght * Height
The perimeter of the rectangle is . (lenght + height)*2
 */


 /**
  * SOLUTION
  */
function getArea(length, width) {
    // Write your code here
    return length * width;
}

function getPerimeter(length, width) {
    // Write your code here
    return (length+width)*2;
}

let length = 3;
let width = 4.5;
console.log(getArea(length, width));
console.log(getPerimeter(length, width));