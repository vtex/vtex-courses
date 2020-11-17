# VTEX Courses

## Introduction

VTEX Courses is a repo made with the intent of unifying contents of courses to be provided for partners. It's final goal is to build a learning path currently focused on enhancing VTEX IO knowledge.

![image](https://user-images.githubusercontent.com/18701182/92618379-ad04a380-f296-11ea-8ed2-ca4c8abb7668.png)

## Structure

The project is divided between `src` and `courses`.

The `src/` is the current script necessary to upload the contents in whichever platform the course is hosted. The idea, therefore, is to not tie the content to a specific platform.

The `course/` is where the contents of the courses are located, each child folder is a different course, inside each course there are inner folders that represent steps, the content of the step is in a `{language}.md` file.

Inside each step there is an `answersheet/` folder of which each file represents what you expect from file diffs.

On the root of one course folder there are three specific files: `metadata.json`, `overview.md` and `summary.json`.

- The overview is used for the course landing page;
- The summary is used to control the steps order, title and description;
- The metadata is used to create the learning path assets

```
|_courses/
  |_course-one/
    |_step-one/
      |_answersheet/
        |_file-1-changed.ts
        |_file-2-changed.ts
      |_pt.md
    |_step-two/
      |_answersheet/
        |_file-1-changed.ts
        |_file-2-changed.ts
      |_pt.md
```

## Contributing

### Courses

To create a new course, you just need to go through the following steps:

1. Create a new folder within the `courses/` folder;

2. Create the `overview.md`, the `metadata.json` and the `summary.json` files:

`metadata.json` file example:

```
{
  "title": "Layouts Complexos",
  "description": "Componha layouts complexos e diversos com os blocos de composição e os blocos básicos.",
  "image": "https://appliancetheme.vtexassets.com/assets/app/src/complex_layout_course_icon___dcea05389ebe234d38cc35ec721fa346.svg"
}
```

`summary.json` file example:

```
[
  {
    "folder": "01_introducing-layout",
    "title": {
      "pt": "Apresentando blocos de layout"
    },
    "description": {
      "pt": "Vamos criar layouts complexos de forma simples"
    }
  },
  {
    "folder": "02_flexlayout",
    "title": {
      "pt": "Flex layout"
    },
    "description": {
      "pt": "Criando layouts de grid com blocos básicos"
    }
  }
]
```

3. Create as many folders for steps as you need, within those folders you might create language files for translations of the steps:

```
|_new-course/
  |_step-one/
    |_pt.md
    |_en.md
  |_step-two/
    |_pt.md
    |_en.md
  |_step-three/
    |_pt.md
    |_en.md
  |_step-four/
    |_pt.md
    |_en.md
```

4. In the end, to add the answersheets to the steps, you need to add an `answersheet/` folder with as many files as you need to create the answersheet link:

```diff
|_new-course/
  |_step-one/
+   |_answersheet/
+     |_one-file.ts
+     |_other-file.ts
    |_pt.md
    |_en.md
  |_step-two/
    |_pt.md
    |_en.md
  |_step-three/
    |_pt.md
    |_en.md
  |_step-four/
    |_pt.md
    |_en.md
```

5. Optional: If you want to, you can create a challenge for your course, that will be displayed at the end of the course, to do so, just create a `challenge.md` file at the root of a course:

```diff
|_new-course/
  |_step-one/
   |_answersheet/
     |_one-file.ts
     |_other-file.ts
    |_pt.md
    |_en.md
  |_step-two/
    |_pt.md
    |_en.md
  |_step-three/
    |_pt.md
    |_en.md
  |_step-four/
    |_pt.md
    |_en.md
+ challenge.md
```

6. Finally, add your course to the `course/index.json` file in the order you think it fits the best:

```diff
[
  {
    "folder": "basic-blocks",
    "isActive": true
  },
+ {
+   "folder": "layout-blocks",
+   "isActive": true
+ },
  {
    "folder": "styles-course",
    "isActive": true
  },
  {
    "folder": "content-workflow",
    "isActive": true
  },
  {
    "folder": "store-block",
    "isActive": true
  },
  {
    "folder": "service-course",
    "isActive": true
  }
]
```

### Script

The script is currently created to distribute the courses on a ReadMe.io portal, it is therefore an integration script that upload the assets to the correct places and creating a learning path user flow.

It is divided in:

- `clients/` responsible for integrating with the services involved;
- `script/` responsible for the script submission steps;
- `templates/` responsible for creating the markdown and html templates of the steps;
- `utils/` mostly used for assets retrieval and slugifying of `courses/` folder

## Running

To run and see the results of a new course, you just have to run `yarn start` on the root folder, it'll trigger the `index.ts` file and run the script steps.

The course will be available at:

[Learning Path](https://vtex-enterprise-group.readme.io/learning)
