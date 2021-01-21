const fs = require("fs");

function generateHTML(employeesArray) {
  let generatedHTML = "";
  generatedHTML += `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./styles.css">
    </head>
    <body>
        <h1 id="header">My Team</h1>
    <div class="row">
`;
  for (const item of employeesArray) {
    console.log(item);
    `
        <div class="col-4">
        <div class="card team-cards" style="width: 18rem;">
            <div class="card-body team-card">
            <div class= "card-top">
              <h4 class="card-title">${item.getName()}</h4>
              <h5 class="card-subtitle mb-2">${item.getRole()}</h5>
            </div> 
              <ul class="list-group list-group-flush internal-list">
                <li class="list-group-item">ID: ${item.getId()}</li>
                <li class="list-group-item"> <a href="mailto:webmaster@example.com">${item.getEmail()}</a> </li> 
                <li class="list-group-item">
                ${
                  item.getRole() === "Manager"
                    ? `Office Number: ${item.getOfficeNumber()}`
                    : ""
                }
                ${
                  item.getRole() === "Engineer"
                    ? `Github: ${item.getGitHub()}`
                    : ""
                }
                ${
                  item.getRole() === "Intern"
                    ? `School ${item.getSchool()}`
                    : ""
                }
                //!!!!!! do this for each class
                empl/Github eng/School intern:</li>
              </ul>
            </div>
          </div>
        </div>
    `;
  }
  generatedHTML += `
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>
  `;
  fs.writeFile("./dist/index.html", generatedHTML, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

module.exports = generateHTML;
