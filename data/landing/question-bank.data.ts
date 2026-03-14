export const questionBankData = {
  heading: "Your Questions. Organised. Reusable. Always Ready.",
  body: "The Examinogram Smart Question Bank lets you save any question from any exam, filter by subject and topic, and add it to a new paper with one tap. No more retyping. No more losing good questions.",
  highlights: [
    "Save questions with one tap during exam review",
    "Filter by Subject → Chapter → Topic",
    "Edit downloaded question banks locally",
    "Two modes: Study Mode (answers visible) and Exam Mode (answers hidden)",
  ],
  folderTree: [
    {
      subject: "Physics",
      expanded: true,
      chapters: [
        {
          name: "Motion",
          expanded: true,
          topics: [
            { name: "Uniform Acceleration", count: 12 },
            { name: "Newton's Laws", count: 8 },
          ],
        },
        {
          name: "Optics",
          expanded: false,
          topics: [],
        },
      ],
    },
    {
      subject: "Mathematics",
      expanded: false,
      chapters: [],
    },
    {
      subject: "Chemistry",
      expanded: false,
      chapters: [],
    },
  ],
};
