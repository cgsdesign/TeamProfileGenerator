
// create teams section
const generateTeam = teamArr => {
  console.log('generateTeam called')
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${teamArr
        .filter(({ Manager }) => Manager)
        .map(({ name, id, email, officeNumber }) => {
          return `
          <div class="col-12 col-md-3 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">Team Manager: ${name}</h3>
            <p> id: ${id} </p>
            <br>
            <p> email: ${email} </p>
            <br>
            <p> office number: ${officeNumber}</p>
          </div>
        `;
        })
        .join('')}

      ${teamArr
        .filter(({ Engineer }) => Engineer)
        .map(({ name, id, email, github }) => {
          console.log('engineer');
          return `
          <div class="col-12 col-md-3 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">Engineer: ${name}</h3>
            <p> id: ${id} </p>
            <br>
            <p> email: ${email} </p>
            <br>
            <p> github: ${github}</p>
          </div>
        `;
        })
        .join('')}

      ${teamArr
        .filter(({ Intern }) => Intern)
        .map(({ name, id, email, school }) => {
          console.log('intern');
          return `
          <div class="col-12 col-md-3 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">Intern: ${name}</h3>
            <p> id: ${id} </p>
            <br>
            <p> email: ${email} </p>
            <br>
            <p> school: ${school}</p>
          </div>
        `;
        })
        .join('')}  
    
      </div>
    </section>
  `;
};

// export function to generate entire page
const generatePage = (templateData) => {

  const {projects} = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TeamProfile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">Project Team</h1>
      </div>
    </header>
    <main class="container my-5">
      ${generateTeam(templateData)}
    </main>
  </body>
  </html>
  `;
};

module.exports = generatePage
