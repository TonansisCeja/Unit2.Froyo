
// Prompt the user for a list of integers separated by commas.

    const userInputString = prompt(
          "Please enter all the froyo favors separated separated by commas that you would like to order for example.",
          "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
  
// Splits the string of numbers into an array of strings.

    const strngArray = userInputString.split(",");
    
// Prints out messages and results
   console.log(`Thank you, This was what you entered:`);
   console.table(strngArray);
   console.log(`       `);
   console.log(`This is the count of all the flavors`);
   countFlavors(strngArray);
   console.table(countFlavors(strngArray));

// Function uses the array of strings that was creating with the split method from the user input string.
   function countFlavors(strngArray)
   { 
          // declares count to be an object
          const count= {};

          // loops through the array using FOR loop. 
          for (let i = 0; i<strngArray.length; i++)
              {                        
                   
                  // Creates a variable "val" and gives it the value of stringArray with index i
                  const val = strngArray[i];
              
                        // if the value exist in the count object then it  adds one to that value.
                        if(count[val]) 
                               {
                                  count[val]+=1;
                               }

                        // if doesn't exist then gives it the value 1.                    
                        else
                              {
                                 count[val]=1;
                              }

              // loops back to the next string until i is less then the length  

              } 
    return (count);
    }

