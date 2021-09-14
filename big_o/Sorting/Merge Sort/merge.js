//How Merge Sort works
[8,3,5,4,7,6,1,2]
//to
[8,3,5,4] /*and*/ [7,6,1,2]
//to
[8,3]/*and*/[5,4] /*and*/ [7,6]/*and*/[1,2]
//to finally
[8]/*and*/[3]/*and*/[5]/*and*/[4]/*and*/[7]/*and*/[6]/*and*/[1]/*and*/[2]
//Then merge them back sorted
[3,8] /*and*/ [4,5] /*and*/[6,7]/*and*/[1,2]
//Then
[3,4,5,8] /*and*/ [1,2,6,7]
//Finally
[1,2,3,4,5,6,7,8]
