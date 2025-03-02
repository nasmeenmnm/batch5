
# Contribution Guidelines for UOK CS 5th Batch Website

Welcome to the **UOK CS 5th Batch** website repository! 🎉 We’re excited to have you contribute and share your personal details through the website.

Follow these guidelines to ensure a smooth contribution process.

## How to Contribute

### 1. Fork the Repository
Start by forking the repository to your GitHub account.

### 2. Clone Your Fork
Clone your forked repository to your local machine:

```bash
git clone https://github.com/your-username/batch5.git
```

### 3. Add Your Folder
Go to the `pages` directory in your project, and create a folder with your name **(without spaces)**. For example, if your name is **Peter Mac**, the folder name should be `peter-mac`.

Inside this folder, create your **MDX files** (`about.mdx`, `me.mdx`, etc.) and an **_meta.js** file.

#### Folder Structure Example:

```
pages/
  Peter_Parker/
    about.mdx
    me.mdx
    _meta.js
```

#### Example of `_meta.js`:

```js
const meta = {
    me: "Peter Parker",
    about: "About Me"
}

export default meta;
```

This file will be used to manage the titles of your pages as they appear on the website.

### 4. Format Your MDX Files

Ensure that your MDX files (`about.mdx`, `me.mdx`, etc.) are properly formatted. Use the existing structure and format for consistency.

#### Example `about.mdx`:

```mdx
---
title: "About Me"
description: "Learn more about Peter Parker, a passionate Computer Science student."
---

# About Me

Hi! I'm **Peter**, a 5th batch Computer Science student at the University of Kelaniya. I have a passion for programming and problem-solving, and I enjoy working on web development projects.
```

### 5. Run Tests

Before submitting your pull request, **always run the tests** to ensure your MDX files are properly formatted and everything is in order.

To run the tests, use the following command:

```bash
npm test
```

Make sure there are no errors or warnings before proceeding.

### 6. Commit Your Changes

Once you’ve made your changes, commit them to your branch:

```bash
git add .
git commit -m "your commit message"
```

### 7. Push Your Changes

Push your changes to your fork:

```bash
git push origin your-branch-name
```

### 8. Create a Pull Request

Go to your forked repository on GitHub and create a pull request against the `main` branch of the **UOK-CS-Batch5** organization’s repository.

Provide a detailed description of the changes you've made, including your name and any files you've added.

### 9. Follow the Code of Conduct

We expect all contributors to adhere to our **Code of Conduct**:

- Be respectful to all contributors.
- Communicate in a friendly and professional manner.
- Be open to feedback.

### 10. Use Discussions for Collaboration

If you have any questions, need clarification, or want to discuss ideas with other contributors, please use the **Discussions** page in the repository. It’s a great place to collaborate, ask for help, and share ideas. 

You can access the discussions page here:  
[UOK-CS-Batch5 Discussions](https://github.com/UOK-CS-Batch5/batch5/discussions)


## Reporting Issues

If you find any bugs or issues with the website, please report them by opening an issue in the **Issues** tab.

---

Thank you for contributing! We appreciate your efforts in building a fantastic portal for the UOK CS 5th Batch! 🎉
