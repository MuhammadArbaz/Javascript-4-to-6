    <!---------- Chapter 4 ---------->

    <!-- Question 1
    Declare 3 variables in one statement?
    <script>
    var student_name="Umair" ; institute=" saylani Smit" ; course= " Meta Web & App Development";
    alert(student_name+institute+course)
    </script> -->
    




    <!-- Question 2
    Declare 5 legal & 5 illegal variable names?
    
    Legal variable names:
    1,   umairChohan ("A variable name that contain a camelCase.")
    2,   _umairChohan ("A variable name that starts with underscores.")
    3,   $umairChohan ("A variable name that starts with dollar signs.")
    4,   umairChohan123 ("A varible name that contain both inetger/numbers & string.")
    5,   umair_Chohan_123 ("A varible name that contain snake__case.")

    Illegal variable names:
    1,   123umairChohan("that start with a integer/numbers.")
    2,   umair Chohan("that contains a space.")
    3.   umair-chohan("that has a hyphen.")
    4,   var ("that have a reserved JavaScript keywords like alert,var")
    5,   umair&chohan("that contaion specical character "&" which is not allowed") -->




    <!-- Question 3
    3. Display this in your browser?
    <script>
    document.write("<ul><h1> Rules for naming JS variables </h1> <li>Variable names can only contain , numbers , dollor sign $ and _ for example : 123umairChohan , umair_Chohan , $umairChohan </li>  <li> Variables must begin with a letter,$,or_ for example : $umairChoahn , _umairChohan , umairchohan. </li>  <li>Variables names should not be JS Reserved Keywords.</li> </ul>");
    </script> -->

    <!---------- Chapter 4 ---------->




    <!---------- Chapter 5 ---------->

    <!-- Question 1
    Write a program that take two numbers & add them in a new variable. Show the result in your browser?
    <script>
        var a = 3;
        var b = 5;
        var c = a + b;
        document.write("<b>Sum of </b>" + a + "<b> and </b>" + b + "<b> is </b>" + c);
    </script> -->




    <!-- Question 2
    Repeat task in question 1 for subtraction, multiplication, division & modulus?
    
    Subtraction: "subtract"  -->
    <!-- <script>
        var a = 26;
        var b = 14;
        var c = a - b;
        document.write("<b>Subtraction of </b>" + a + "<b> and </b>" + b + "<b> is </b>" + c);
    </script> -->

    <!-- Multiplication: multiply -->
    <!-- <script>
        var a = 6;
        var b = 8;
        var c = a * b;
        document.write("<b>Multiplication of </b>" + a + "<b> and </b>" + b + "<b> is </b>" + c);
    </script> -->

    <!-- Division: divide -->
    <!-- <script>
        var a = 36;
        var b = 6;
        var c = a / b;
        document.write("<b>Division of </b>" + a + "<b> by </b>" + b + "<b> is </b>" + c);
    </script> -->

    <!-- Modulus: %
    <script>
        var a = 5;
        var b = 100;
        var c = a % b;
        document.write("<b>Modulus of </b>" + a + "<b> by </b>" + b + "<b> is </b>" + c);
    </script> -->




    <!-- Question 3
    Do the following using JS Mathematic Expressions?  -->
    <!-- <script>
    // a. Declare a variable. 
        var my;

    // b. Show the value of variable in your browser like “Value after variable declaration is: ??.
        document.write("Value after variable declaration is : " + my + " </br>" );
    
    // c. Initialize the variable with some number.
        my = 20;
    
    // d. Show the value of variable in your browser like "Initial value: 5”.
        document.write("Initail value : " + my + "</br>");

    //e. Increment the variable.
        ++my;

    //f. Show the value of variable in your browser like “Value after increment is: 6”.
        document.write("Value after incremet is : " + my + "</br>");

    // g. Add 7 to the variable.
        my += 7

    // h. Show the value of variable in your browser like “Value  after addition is: 13”.
        document.write("Value after addition is : " + my + "</br>");

    // i. Decrement the variable.
        --my

    // j. Show the value of variable in your browser like “Value after decrement is: 12”.
        document.write("Value after decrement is : " + my + "<br>");

    // k. Show the remainder after dividing the variable’s value by 3.
        my /= 3

    // l. Output : “The remainder is : 0”.
        document.write("The reminder is : " + my);
    </script> -->




    <!-- Question 4
    Cost of one movie ticket is 600 PKR. 
    Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. -->
    <!-- <script>
        var ticket;
        var cost;
        var movie;
        ticket = 600;
        cost = "Total cost to buy ";
        movie = "tickets to a movie is "
        ticket *=5;
        document.write(cost + " 5 " + movie + ticket + " Pkr");
    </script> -->




    <!-- Question 5
    Write a script to display multiplication table of any number in your browser. -->
    <!-- <script>
        var a = 5;
        document.write("<h1> Multiplication table of 5 </h1>")
        // Loop to generated a Loop for multiplication table using Data-Base "for"    
        for (var b=1; b<=10; b++){
            document.write ( a + " x " + b + " = " + a * b + "</br>");
        }
    </script> -->




    <!-- Question 6
    The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
        a. Store a Celsius temperature into a variable.
        b. Convert it to Fahrenheit & output “NNoC is NNoF”.
        c. Now store a Fahrenheit temperature into a variable.
        d. Convert it to Celsius & output “NNoF is NNoC”.
        //Sir you haven't thought us that method. -->

    


    <!-- Question 7
    Write a program to implement checkout process of a shopping cart system for an e-commerce website.
    Store the following in variables.
    <script>
        //a. Price of item 1.
        var item1 = 650;
        // b. Price of item 2
        var item2 = 100;
        // c. Ordered quantity of item 1
        var qty_item1 = 3;
        // d. Ordered Quantity of item 2
        var qty_item2 = 7;
        // e. Shipping charges
        var ship_charges=100;


        var total_cost = (item1 * qty_item1) + (item2 * qty_item2) + ship_charges; 
        document.write("<h1> Shopping Cart </h1>");
        document.write("Price of item 1 is " + item1 + "</br>");
        document.write("Quaintity of item 1 is " + qty_item1 + "</br>");
        document.write("Price of item 2 is " + item2 + "</br>");
        document.write("Quaintity of item 2 is " + qty_item2 + "</br></br></br></br>");
        document.write("Total cost of your order is " + total_cost);
    </script> -->
    



    <!-- Question 8
    Store total marks & marks obtained by a student in 2 variables. 
    Compute the percentage & show the result in your browser.
    <script>
        var total = 980;
        var obtained = 804;

        document.write("<h1> Mark Sheet </h1>")
        document.write("Total marks : " + total + "</br>");
        document.write("Marks obtained : " + obtained + "</br>");
        document.write("Percentage : " + obtained / total * 100 + "%");
    </script> -->



    
    <!-- Question 9
    Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
    Perform all calculations in a single expression.
    (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee). -->
    <!-- <script>
        var dollar_qty = 10;
        var riyal_qty = 25;

        var dol_to_pkr = 104.80;
        var riyal_to_pkr = 28;

        var total_pkr = ((dol_to_pkr * dollar_qty) + (riyal_to_pkr * riyal_qty));
        document.write("<h1> Currency in PKR </h1>");
        document.write("Total currency in PKR : " + total_pkr);
    </script> -->




    <!-- Question 10
    Write a program to initialize a variable with some number and do arithmetic in following sequence:
    Perform all calculations in a single expression.
    <script>
        var number = 1;
        // a. Add 5
        // b. Multiply by 10
        // c. Divide the result by 2
        var result = ((((number+5)*10)/2));
        document.write(result);
    </script> -->
    



    <!-- Question 11
    The Age Calculator: Forgot how old someone is? Calculate it!
    <script>    
        //a. Store the current year in a variable.
        var c_year = 2024;
        //b. Store their birth year in a variable.
        var b_year = 1991;
        //c. Calculate their 2 possible ages based on the stored values.
        var age = c_year - b_year;
        
        document.write("<h1> Age Calculater </h1>");
        document.write("Current Year : " + c_year + "</br>");
        document.write("Birth Year : " + b_year + "</br>");
        document.write("Your age is : " + age);
    </script> -->




    <!-- Question 12
    The Geometrizer: Calculate properties of a circle 
        a. Store a radius into a variable.
        b. Calculate the circumference based on the radius, and output “The circumference is NN”.
        (Hint : Circumference of a circle = 2 π r , π = 3.142)
        Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
    Sir you haven't thought us this method. -->




    <!-- Question 13
    The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
    Wonder no more. -->
    
    <!-- <script>
        //a. Store your favorite snack into a variable.
        var snack = "Pizza";
        //b. Store your current age into a variable.
        var cur_age = 33; 
        //c. Store a maximum age into a variable.
        var max_age = 68;
        //d. Store an estimated amount per day (as a number).
        var est_amount = 2;
        //e. Calculate how many would you eat total for the rest of your life.
        var lifeTime = ((((max_age - cur_age) * 12) *30) *est_amount);
        // var lifeTime = (((cur_age - max_age * 12) /30)*2);
        alert(lifeTime);
        

        document.write("<h1>The Lifetime Supply Calculator</h1>");
        document.write("Favourite snack : " + snack + "</br>");
        document.write("Current age : " + cur_age + "</br>");
        document.write("Estimated Maximum Age : " + max_age + "</br>");
        document.write("Amount of snacks per day : "+ est_amount + "</br>");
        document.write("You will need " + lifeTime + snack + " to last you until the ripe old age of " + max_age);
    </script> -->

    <!---------- Chapter 5 ---------->




    <!---------- Chapter 6 ---------->

    <!-- Question 1
    Write a program to take a number in a variable, 
    do the required arithmetic to display the following result in your browser:
    <script>
        var a = 10;
        document.write("<h1>Result:</h1> \n The value is : " + a + "</br>");
        document.write(".............................."   + "</br>");
        document.write("The value of ++a is : "+ ++a + "</br>" + "now the value of a is " + a + "</br> </br> </br> </br>");
        document.write("The value of a++ is : "+ a++ + "</br>" + "now the value of a is " + a + "</br> </br> </br> </br>");
        document.write("The value of --a is : "+ --a + "</br>" + "now the value of a is " + a + "</br> </br> </br> </br>");
        document.write("The value of a-- is : "+ a-- + "</br>" + "now the value of a is " + a + "</br> </br> </br> </br>");
    </script> -->




    <!-- Question 2
    What will be the output in variables a, b & result after execution of the following script:
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    Explain the output at each stage: -->
    <script>
     var a = 2;
     var b = 1;

    // 1, --a; (The value of a is decremented before its current value is used. So, a becomes 1.).

    // 2, --a - --b;
    //    --a has already decremented a to 0.
    //    --b decrements b to 0.
    //    So, they become 0 - 0, resulting in 0.

    // 3, --a - --b + ++b;
    //    --a has already decremented a to -1.
    //    --b has already decremented b to -1.
    //    ++b increments b to 1.
    //    So, they becomes -1 (-1) + 0, resulting in 0.

    // 4, --a - --b + ++b + b--;
    //    --a has already decremented a to -2.
    //    --b has already decremented b to -2.
    //    ++b increments b to -1.
    //    b-- uses the current value of b and then decrements it, so it is -1 before being decremented.
    //    So, they becomes -2 - (-2) + (-1) + (-1), 
    //    Resulting in -2 - (-2) + (-1) + (-1), which equals 0.
    
    var a = 2;
     var b = 1;
    --a;
    --a - --b;
    --a - --b + ++b;
    --a - --b + ++b + b--;
    result = --a - --b + ++b + b--;
    alert(result);