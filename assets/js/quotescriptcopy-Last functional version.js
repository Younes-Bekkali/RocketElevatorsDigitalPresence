/*---- Variables declaration ---- */
                    function resetInputs() {
                        
                     
                        
                    document.getElementById("numBusinesses").value = document.getElementById("numBusinesses").innerHTML = "";
                    document.getElementById("numFloors").value = document.getElementById("numFloors").innerHTML ="";
                    document.getElementById("numBasements").value = document.getElementById("numBasements").innerHTML = "";
                     document.getElementById("numParkingSpaces").value = document.getElementById("numParkingSpaces").innerHTML = "";
                    document.getElementById("numCompanies").value = document.getElementById("numCompanies").innerHTML ="";
                     document.getElementById("numApartments").value = document.getElementById("numApartments").innerHTML = "";

                    document.getElementById("numOccupantsPerFloor").value = document.getElementById("numOccupantsPerFloor").innerHTML = "";

                    document.getElementById("numActivityHours").value = document.getElementById("numActivityHours").innerHTML = "";
                    document.getElementById("numElevatorsCages").value = document.getElementById("numElevatorsCages").innerHTML = "";
                     

                      
                    }

                    function resetOutputs() {
                      //  document.getElementById("unitPrice").value = document.getElementById("unitPrice").innerHTML = 0;
                    document.getElementById("numOfCages").value = document.getElementById("numOfCages").innerHTML = null;
                     document.getElementById("totalCost").value = document.getElementById("totalCost").innerHTML = null;
                    }

/*
          

            /*---------------- Selection Function -------------------*/
            function indexBuildingType() {
                
                var index = document.getElementById("buildingType").selectedIndex;
  
                return index;

            }
             var indexTest = indexBuildingType()
             //console.log("idexText +++" + indexTest ) 

                     /*---- / Variables declaration ---- */
           
            function showDiv(chosen){
               
                switch (chosen) {

                 case "residential":
                  // to be shown
                      document.getElementById("NumApartentsDiv").style.display = 'block';
                      document.getElementById("NumFloorsDiv").style.display = 'block';
                    document.getElementById("NumBasementsDiv").style.display = 'block';
                     document.getElementById("ProductLineChoiceDiv").style.display = 'block';
                     resetInputs()
                 // to be hidden      
                    document.getElementById("NumBusinessesDiv").style.display = 'none';
                    document.getElementById("NumParkingSpacesDiv").style.display = 'none';
                     document.getElementById("NumElevatorsCagesDiv").style.display = 'none';
                     document.getElementById("NumCompaniesDiv").style.display = 'none';
                    document.getElementById("OccupantsPerFloorDiv").style.display = 'none';
                    document.getElementById("numActivityHoursDiv").style.display = 'none'; 
      
                         //console.log("switch residential")

                 break;   
    
                case "commercial":
                // to be shown
                    document.getElementById("NumBusinessesDiv").style.display = 'block';
                    document.getElementById("NumFloorsDiv").style.display = 'block';
                    document.getElementById("NumBasementsDiv").style.display = 'block';
                     document.getElementById("NumApartentsDiv").style.display = 'none';
                     document.getElementById("NumParkingSpacesDiv").style.display = 'block';
                     document.getElementById("NumElevatorsCagesDiv").style.display = 'block';
                     document.getElementById("ProductLineChoiceDiv").style.display = 'block';        
                     resetInputs()
                     resetOutputs()
                    // to be hidden          
            
                     document.getElementById("NumCompaniesDiv").style.display = 'none';
                    document.getElementById("OccupantsPerFloorDiv").style.display = 'none';
                    document.getElementById("numActivityHoursDiv").style.display = 'none'; 
     
                    //console.log("switch commercial")
                 break ;

     

                case "corporate":
                   // to be shown
                    document.getElementById("NumCompaniesDiv").style.display = 'block';
                    document.getElementById("OccupantsPerFloorDiv").style.display = 'block';
                    document.getElementById("NumBasementsDiv").style.display = 'block';
                    document.getElementById("NumParkingSpacesDiv").style.display = 'block';
                    document.getElementById("NumFloorsDiv").style.display = 'block';
                    document.getElementById("ProductLineChoiceDiv").style.display = 'block';
                    resetInputs()
                    resetOutputs()
                // to be hidden
                     document.getElementById("NumApartentsDiv").style.display = 'none';
                     document.getElementById("NumBusinessesDiv").style.display = 'none';
                     document.getElementById("NumElevatorsCagesDiv").style.display = 'none';
                     document.getElementById("numActivityHoursDiv").style.display = 'none'; 
     
                    //console.log("switch Corporate ")
                 break;

                case "hybrid":

                    // to be shown

                     document.getElementById("NumBusinessesDiv").style.display = 'block';
                     document.getElementById("NumFloorsDiv").style.display = 'block';
                     document.getElementById("NumBasementsDiv").style.display = 'block';
                     document.getElementById("NumParkingSpacesDiv").style.display = 'block';
                     document.getElementById("OccupantsPerFloorDiv").style.display = 'block';
                     document.getElementById("numActivityHoursDiv").style.display = 'block'; 
                     document.getElementById("ProductLineChoiceDiv").style.display = 'blcok';
                     resetInputs()
                     resetOutputs()
                    // to be hidden
                     document.getElementById("NumApartentsDiv").style.display = 'none';
                     document.getElementById("NumElevatorsCagesDiv").style.display = 'none';
                     document.getElementById("NumCompaniesDiv").style.display = 'none';
                    
                      //console.log("switch hybrid")
                 break;
                    
                default :
                     document.getElementById("NumApartentsDiv").style.display = 'none';
                     document.getElementById("NumFloorsDiv").style.display = 'none';
                     document.getElementById("NumBasementsDiv").style.display = 'none';
                     document.getElementById("NumBusinessesDiv").style.display = 'none';
                      document.getElementById("NumParkingSpacesDiv").style.display ='none';
                     document.getElementById("NumElevatorsCagesDiv").style.display = 'none';
                     document.getElementById("NumCompaniesDiv").style.display = 'none';
                     document.getElementById("OccupantsPerFloorDiv").style.display = 'none';
                      document.getElementById("numActivityHoursDiv").style.display = 'none'; 
                      document.getElementById("ProductLineChoiceDiv").style.display = 'none'; 


                }       
                          //  console.log("chosen is "+chosen);
                          //  console.log(typeof(chosen));
            }
                   /*
                    function showDiv() {
           
                     var buildingType = document.getElementById("buildingType").selectedIndex;
    
                        
        
                    }; */

            
            
      
           
             /////************************** Commercial Lift Cages Number *****************************////
             var commercialLiftCages = function(){
                var numElevatorsCages = document.getElementById("numElevatorsCages").value ;
               // console.log("function commercialLiftCages ")
                 return numElevatorsCages
             }

          
             /////************************** Residential Lift Cages Number *****************************////

            var residentialLiftCages = function(){

                var numFloors = document.getElementById("numFloors").value;
                
                var numApartments = document.getElementById("numApartments").value;
                
                 if ( numFloors != 0 &&  numApartments != 0) {

                return  Math.ceil(numApartments/ (numFloors * 6)) * Math.ceil(numFloors / 20)

                 }     
            }
               
            ///////////////////********** Corporate & Hybrid Lift Cages Number ******************////////////


            var corporateLiftCages = function () {
               
                var numBasements = parseInt(document.getElementById("numBasements").value) ;
                var numFloors = parseInt(document.getElementById("numFloors").value);
                var numOccupantsPerFloor = parseInt(document.getElementById("numOccupantsPerFloor").value);
                
                if ( numBasements > 0 &&  numFloors > 0 &&  numOccupantsPerFloor > 0) {
                   // the total number of occupants
                    var floorsTotal = parseInt(numFloors) + parseInt( numBasements);
                    console.log("floorsToral " + floorsTotal)

                    var totalNumberOccupants = parseInt(numOccupantsPerFloor) * floorsTotal;

                    console.log("totalNumberOccupants " + totalNumberOccupants)
                    //  the number of occupants
                    var numElevatorsRequired = Math.ceil(parseInt(totalNumberOccupants) / 1000);
                    console.log("umElevatorsRequired " + numElevatorsRequired)

                    //  the number of elevator columns required.
                    var numElevatorsCulumnRequired = Math.ceil(floorsTotal/20);
                    console.log("numElevatorsCulumnRequired " + numElevatorsCulumnRequired)

                    // the number of elvators
                    var NumberElevators= Math.ceil(parseInt(numElevatorsRequired)  / parseInt(numElevatorsCulumnRequired));
                    console.log("NumberElevators " +NumberElevators)

                   // var numElevatorsPerCulmn = Math.ceil(parseInt(numElevatorsRequired) /parseInt(numElevatorsCulumnRequired))
                    
                    var result = Math.ceil( parseInt(NumberElevators) * parseInt(numElevatorsCulumnRequired));
                    console.log("result "  + result)
                    return result
              }
            }

            
                    //**************************************/////////********************************///////
                    var productLine = [
                        {price : 7565 ,
                        installationFees : 1.1},
                        {price : 12345,
                        installationFees : 1.13},
                        {price : 15400,
                        installationFees : 1.16}
                        ];


                    /////******///NaN remover
                                function nanRemover(val){
                                    if(isNaN(val)){
                                        return ""
                                    } else{
                                        return val
                                    }
                                }
                                



            /////************************************//////***************************************////
                     function  fun() {
                        var buildingType = indexBuildingType();
                        var cagesNumber;
                        if(buildingType == 1) {
                            cagesNumber = residentialLiftCages () ;
                        } else if (buildingType == 2){
                            cagesNumber = commercialLiftCages () ;
                        } else if (buildingType == 3 || buildingType == 4){
                            cagesNumber = corporateLiftCages ();
                           
                        }
                        
                  
                      
                        var option = document.getElementsByName ("productLine")

                        //------
                        var unitPrice = document.getElementById("unitPrice");
                        var numOfCages = document.getElementById("numOfCages");
                        var finalCost = document.getElementById("totalCost");
                    

                        //------ Format $
                            const formatter = new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 2
                            })


                        //-----
                          
                            // ("Standard");
                             if (option[0].checked) {
                                 

                            resetOutputs()

                             
                           

                            //**
                            document.getElementById("finalResults").style.display = 'block';
                            //**
                           // unitPrice.value = formatter.format(productLine[0].price);
                        
                            numOfCages.value = nanRemover(cagesNumber);
                           var finalCostS = (productLine[0].price * productLine[0].installationFees * cagesNumber).toFixed(2);
                            finalCostS = "$"+ nanRemover(finalCostS)//formatter.format( finalCostS);
                            finalCost.value = finalCostS;
                          

                             


                            } else if (option[1].checked) {

                            resetOutputs()
                           
                            //**
                            document.getElementById("finalResults").style.display = 'block';
                            //****
                            //unitPrice.value =  formatter.format(productLine[1].price);
                   
                            numOfCages.value = nanRemover(cagesNumber);

                            var finalCostS = (productLine[1].price * productLine[1].installationFees * cagesNumber).toFixed(2);
                            finalCostS = "$"+ nanRemover(finalCostS)//formatter.format( finalCostS);
                            finalCost.value = finalCostS;

                            // ("Premium");
                            } else if (option[2].checked) {
                            resetOutputs()
                            
                             
                            //**
                            document.getElementById("finalResults").style.display = 'block';
                            ///****
                           //unitPrice.value = formatter.format(productLine[2].price);
                           
                            numOfCages.value = nanRemover(cagesNumber);
                            
                            var finalCostS = (productLine[2].price * productLine[2].installationFees * cagesNumber).toFixed(2);
                            finalCostS = "$"+ nanRemover(finalCostS)//formatter.format( finalCostS);
                            finalCost.value = finalCostS;  ///nanRemover(finalCostS);
                            
                            //("Excelium");
                            }
                        }             


            /// ********************************* another Test ************************////////  

                    





       
     