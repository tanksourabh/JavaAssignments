/**
 * @author sourabh.tank
 */
 //Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.  
 
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);