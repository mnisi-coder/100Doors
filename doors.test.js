let doors = require ("./doors");

//Example test
describe("100 doors", function () {
    it("should return open doors", function () {
        let door = new doors();
        let openDoors = door.open();
        let element = '';
        for (let index = 0; index < 100; index++) {

            if(index === 0){
                element += '*';
            }else{
                 element += ', *';
            }
            
        }

        expect(openDoors).toBe(element);
    });



    it("should return closed doors after ever second step", function () {
        let door = new doors();
        let closeDoor = door.close();
        

        let arrOpen = door.open();

       let arrs =arrOpen.split(',')

         for (let index = 0; index < arrs.length; index++) {
           
            if(index % 2 === 1 )
            {
                arrs[index] = '#' ;
            }
              
        }

      


        expect(closeDoor).toBe(arrs.toString());
    });   
    
    
    it("should return closed doors that are open and open closed doors for every 3rd number", function () {
        let door = new doors();
        let toggleDoor = door.toggle();

        let toggle = door.close();


        let ArrToggle = toggle.split(',');

       

        
        

        
         for (let index = 2; index < 100; index += 3) {
             
            let doorIndex = index ;
            if(index % 2 === 0 || index % 2 === 1 )
             {
                
                 
                  if(ArrToggle[doorIndex] == " *")
                  {
                    ArrToggle[doorIndex] = '#';
                 
                  } else if(ArrToggle[doorIndex] == "#"){
                    ArrToggle[doorIndex] = ' *';

                  }
             }

             
              
        }



        expect(toggleDoor).toBe(ArrToggle.toString());
    }); 


});