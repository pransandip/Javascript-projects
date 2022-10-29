Note: Document.querySelector():
      The Document method querySelector() returns the first Element
      within the document that matches the specified selector, or
      group of selectors. If no matches are found, null is returned.

Note: The matching is done using depth-first pre-order traversal
      of the document's nodes starting with the first element in the 
      document's markup and iterating through sequential nodes by order
      of the number of child nodes.

Note: If you need a list of all elements matching the specified 
      selectors, you should use querySelectorAll() instead.

Defer: The defer attribute is a boolean attribute.If the defer attribute is set, it specifies that
       the script is downloadedin parallel to parsing the page, and executed after the page has finished parsing.

Note: Element.getAttribute()
      The getAttribute() method of the Element interface returns the value of a specified attribute on the element.
      If the given attribute does not exist, the value returned will either be null or "" (the empty string); 

Note: <!-- example div in an HTML DOC -->
      <div id="div1">Hi Champ!</div>

      // in a console
      const div1 = document.getElementById('div1');
      //=> <div id="div1">Hi Champ!</div>

      const exampleAttr= div1.getAttribute('id');
      //=> "div1"

      const align = div1.getAttribute('align')
      //=> null

Note: The syntax is simple. Any attribute on any element whose attribute name starts with data- 
      is a data attribute. Say you have an article and you want to store some extra information that 
      doesn't have any visual representation. Just use data attributes for that:

        <article
        id="electric-cars"
        data-columns="3"
        data-index-number="12314"
        data-parent="cars">
        ...
        </article>

        const article = document.querySelector('#electric-cars');
        // The following would also work:
        // const article = document.getElementById("electric-cars")

        article.dataset.columns // "3"
        article.dataset.indexNumber // "12314"
        article.dataset.parent // "cars"

Note: dataset is a object of a all these data attributes

Note: parseInt(string)
      parseInt(string, radix)

      The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN.
      If not NaN, the return value will be the integer that is the first argument taken as a number in the specified radix.
      (For example, a radix of 10 converts from a decimal number, 8 converts from octal, 16 from hexadecimal, and so on.)

        function roughScale(x, base) {
            const parsed = parseInt(x, base);
            if (isNaN(parsed)) { return 0; }
            return parsed * 100;
            }

        console.log(roughScale(' 0xF', 16));
        // expected output: 1500

        console.log(roughScale('321', 2));
        // expected output: 0

