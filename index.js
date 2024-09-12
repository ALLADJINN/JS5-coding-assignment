// game consoles 
//class console 
//console brand
//console name 
//console year 

class Console{
    constructor(brand, name, year){
        this.brand = brand; 
        this.name = name; 
        this.year = year;
    }
    
}

//class menu  
//class array

class Menu{
    constructor(){
        this.consoles=[];
    }


//add consoles
//prompt for a console
//prompt for a brand
//prompt for a year 
//create new console and push a console into array 

    addConsoles(){
        let consoleBrand = prompt ("Enter the console brand:");
        let consoleName = prompt ("Enter the name of console:");
        let consoleYear = prompt ("Enter the console release year:"); 
        this.consoles.push(new Console(consoleName, consoleBrand, consoleYear)); 
}



//delete consoles 
    
    deleteConsole(){
        let consoleIndex = prompt("Enter console index to DELETE:");
        this.consoles.splice(consoleIndex, 1);
    }


//view consoles 

    viewConsoles(){
        let displayConsoles = " "; 
            for (let i = 0; i< this.consoles.length; i++){

            displayConsoles += `
        
            ${i}) ${this.consoles[i].name} ,${this.consoles[i].brand} ,${this.consoles[i].year}` 
        
    }
   
    alert(`
        Console Inventory:
        -----------------------
        
        ${displayConsoles}
        `

        );
    }

//see a menu 
    showMainMenu(){
        return prompt(` 
            Main Menu:
      
            0) Exit Menu 
            1) Add consoles 
            2) Delete consoles 
            3) View all consoles
            `);
}





//start the menu 
    
    start(){
        let selection = this.showMainMenu();

            while(selection != 0){

                switch(selection){

                case "1": this.addConsoles();
                break; 

                case "2": this.deleteConsole();
                break; 

                case "3" : this.viewConsoles();
                break; 

                default: selection = 0; 
            }
        selection = this.showMainMenu();
        }
 alert("Exiting Menu, GoodBye")
    }

}

//instantiate the menu and invoke the start method

let menu = new Menu(); 



menu.start();