import inquirer from "inquirer";
import chalk from 'chalk';

inquirer
  .prompt([{
      type: "rawlist",
      message: "What is the software project type?",
      name: "project_type",
      choices: [{
          name: "Organic",
          value: "organic",
        },
        {
          name: "Semi-detached",
          value: "semi_detached",
        },
        {
          name: "Embedded",
          value: "embedded",
        },
      ],
    },
    {
      type: "rawlist",
      message: "Is software reliability required?",
      name: "eaf-required_software_reliability_extent",
      choices: [{
          name: "Very Low",
          value: 0.75,
        },
        {
          name: "Low",
          value: 0.88,
        },
        {
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 1.15,
        },
        {
          name: "Very High",
          value: 1.4,
        },
      ],
    },
    {
      type: "rawlist",
      message: "How is the size of application database?",
      name: "eaf-size_of_application_database",
      choices: [{
          name: "Low",
          value: 0.94,
        },
        {
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 1.08,
        },
        {
          name: "Very High",
          value: 1.16,
        },
      ],
    },
    {
      type: "rawlist",
      message: "How is the complexity of the product?",
      name: "eaf-complexity_of_the_product",
      choices: [{
          name: "Very Low",
          value: 0.7,
        },
        {
          name: "Low",
          value: 0.85,
        },
        {
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 1.15,
        },
        {
          name: "Very High",
          value: 1.3,
        },
        {
          name: "Extra High",
          value: 1.65,
        },
      ],
    },
    {
      type: "rawlist",
      message: "How is the run-time performance constraints?",
      name: "eaf-run-time_performance_constraints",
      choices: [{
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 1.11,
        },
        {
          name: "Very High",
          value: 1.3,
        },
        {
          name: "Extra High",
          value: 1.66,
        },
      ],
    },
    {
      type: "rawlist",
      message: "How is memory constraints?",
      name: "eaf-memory_constraints",
      choices: [{
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 1.06,
        },
        {
          name: "Very High",
          value: 1.21,
        },
        {
          name: "Extra High",
          value: 1.56,
        },
      ],
    },
    {
      type: "rawlist",
      message: "How is the volatility of the virtual machine environment?",
      name: "eaf-volatility_of_the_virtual_machine_environment",
      choices: [{
          name: "Low",
          value: 0.87,
        },
        {
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 1.15,
        },
        {
          name: "Very High",
          value: 1.3,
        },
      ],
    },
    {
      type: "rawlist",
      message: "How is the required turnabout time?",
      name: "eaf-required_turnabout_time",
      choices: [{
          name: "Low",
          value: 0.87,
        },
        {
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 1.07,
        },
        {
          name: "Very High",
          value: 1.15,
        },
      ],
    },
    {
      type: "rawlist",
      message: "How is the analyst capability?",
      name: "eaf-analyst_capability",
      choices: [{
          name: "Very Low",
          value: 1.46,
        },
        {
          name: "Low",
          value: 1.19,
        },
        {
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 0.86,
        },
        {
          name: "Very High",
          value: 0.71,
        },
      ],
    },
    {
      type: "rawlist",
      message: "How is the software engineering capability?",
      name: "eaf-software_engineering_capability",
      choices: [{
          name: "Very Low",
          value: 1.29,
        },
        {
          name: "Low",
          value: 1.13,
        },
        {
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 0.91,
        },
        {
          name: "Very High",
          value: 0.82,
        },
      ],
    },
    {
      type: "rawlist",
      message: "How is the experience of applications?",
      name: "eaf-applications_experience",
      choices: [{
          name: "Very Low",
          value: 1.42,
        },
        {
          name: "Low",
          value: 1.17,
        },
        {
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 0.86,
        },
        {
          name: "Very High",
          value: 0.7,
        },
      ],
    },
    {
      type: "rawlist",
      message: "How is the experience of virtual machine?",
      name: "eaf-virtual_machine_experience",
      choices: [{
          name: "Very Low",
          value: 1.21,
        },
        {
          name: "Low",
          value: 1.1,
        },
        {
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 0.9,
        },
      ],
    },
    {
      type: "rawlist",
      message: "How is programming language experience?",
      name: "eaf-programming_language_experience",
      choices: [{
          name: "Very Low",
          value: 1.14,
        },
        {
          name: "Low",
          value: 1.07,
        },
        {
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 0.95,
        },
      ],
    },
    {
      type: "rawlist",
      message: "How is the use of software tools?",
      name: "eaf-use_of_software_tools",
      choices: [{
          name: "Very Low",
          value: 1.24,
        },
        {
          name: "Low",
          value: 1.1,
        },
        {
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 0.91,
        },
        {
          name: "Very High",
          value: 0.82,
        },
      ],
    },
    {
      type: "rawlist",
      message: "How is the application of software engineering methods?",
      name: "eaf-application_of_software_engineering_methods",
      choices: [{
          name: "Very Low",
          value: 1.24,
        },
        {
          name: "Low",
          value: 1.1,
        },
        {
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 0.91,
        },
        {
          name: "Very High",
          value: 0.83,
        },
      ],
    },
    {
      type: "rawlist",
      message: "How is the required development schedule?",
      name: "eaf-required_development_schedule",
      choices: [{
          name: "Very Low",
          value: 1.23,
        },
        {
          name: "Low",
          value: 1.08,
        },
        {
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 1.04,
        },
        {
          name: "Very High",
          value: 1.1,
        },
      ],
    },
    {
      type: "number",
      message: "What many KLoC (Kilo Lines of Code) does the project have?",
      name: "kloc",
      choices: [{
          name: "Very Low",
          value: 1.23,
        },
        {
          name: "Low",
          value: 1.08,
        },
        {
          name: "Nominal",
          value: 1.0,
        },
        {
          name: "High",
          value: 1.04,
        },
        {
          name: "Very High",
          value: 1.1,
        },
      ],
      validate(answer) {
        if (answer > 0) {
          return true;
        }

        return "KLoC must be positive.";
      },
    },
  ])
  .then((answers) => {
    const project_type = answers["project_type"];
    const KLoC = answers["kloc"];
    let a, b, c;

    if (project_type === "organic") {
      [a, b, c] = [3.2, 1.05, 0.38];
    } else if (project_type === "semi_detached") {
      [a, b, c] = [3.0, 1.12, 0.35];
    } else if (project_type === "embedded") {
      [a, b, c] = [2.8, 1.2, 0.32];
    }

    const COST_DRIVERS = Object.keys(answers).filter((key) => key.startsWith("eaf-"));
    const EAF = COST_DRIVERS.map((key) => answers[key]).reduce(
      (acc, curr) => acc * curr,
      1
    );
    const E = a * KLoC ** b * EAF;
    const D = a * 2.5 * E ** c;

    console.log(`
      The project needs for development:
      ${chalk.bold(E.toFixed(1))} person-months / ${chalk.bold(D.toFixed(1))} months 
    `);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });