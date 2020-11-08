var Emp = [Manager[
    {
      name: '1',
      description: '2',
      languages: [Array],
      link: '4',
      feature: false,
      confirmAddProject: false
    }
]
  ]

const generateTeam = teamArr => {
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
          .join('')
        })`
    }

    console.log(generateTeam(Emp))