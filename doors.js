class doors{

    //door = '';
     
    open(){
        const openD ='*';
        const closeD ='#';
        let door = '';
       for (let index = 0; index < 100; index++) {
            
            if(index === 0){
                door += '*';
            }else{
                door += ', *';
            }
                
        }

       return door;
    }


    close(door){
        let arrOpen = this.open();

        let arrs = arrOpen.split(',')

         for (let index = 0; index < arrs.length; index++) {
            if(index % 2 === 1 )
            {
                arrs[index] = '#' ;
            }
              
        }

       return arrs.toString();
    }

    toggle()
    {

        let toggle = this.close();
        
         let ArrToggle = toggle.split(',');

        console.log(ArrToggle)

        
        

        
         for (let index = 2; index < 100; index += 3) {
             
            let doorIndex = index ;
           
            if(ArrToggle[doorIndex] == " *")
            {
                ArrToggle[doorIndex] = '#';
            
            } else if(ArrToggle[doorIndex] == "#")
            {
                ArrToggle[doorIndex] = ' *';

            }
            
        }
        

        console.log(ArrToggle);

        return ArrToggle.toString();
    }

    toggleAll()
    {
        let ArrayToggle = this.toggle();

        let stringToggle = ArrayToggle.split(',');

        for (let index = 2; index < 100; index += 3) {
             
            let doorIndex = index ;
           
            if(ArrToggle[doorIndex] == " *")
            {
                ArrToggle[doorIndex] = '#';
            
            } else if(ArrToggle[doorIndex] == "#")
            {
                ArrToggle[doorIndex] = ' *';

            }
            
        }

    }
}

let door = new doors();

//console.log(door.close())

//console.log(door.open())

console.log(door.toggle());

module.exports = doors