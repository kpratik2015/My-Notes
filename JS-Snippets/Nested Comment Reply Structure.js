const comment = {
  id: "1001",
  text: "This is a first-level comment",
  childrenIds: ["1002"], // To store all ids of replies at the next level
  parentId: null,
};

const reply = {
  id: "1002",
  text: "This is a reply",
  childrenIds: [],
  parentId: "1001", // To store the id of parent
};

const commentList = {
  firstLevelIds: ["1001"], // To store ids of only first-level comments
  1001: comment,
  1002: reply,
};

/** AddCommnet.tsx */

const handleAddComment = () => {
  const newId = getUniqueId();
  const newComment = {
    id: newId,
    text: commentText,
    children: [],
    parentId: null,
  };
  setCommentList((prevList) => ({
    ...prevList,
    firstLevelIds: prevList.firstLevelIds.concat(newId),
    [newId]: newComment,
  }));
  setCommentText("");
};

/** AddReply.tsx */

function updateCommentList(prevList, newComment) {
  const updatedParentComment = {
    ...parentComment,
    children: parentComment.children.concat(newComment.id),
  };
  return {
    ...prevList,
    [parentComment.id]: updatedParentComment,
    [newComment.id]: newComment,
  };
}

/** Comment.tsx */

const updateCommentList = (prevList, currentComment) => {
  const updatedComments = prevList;
  const currentId = currentComment.id;
  const childComments = updatedComments[currentId].children;
  const parentId = currentComment.parentId;
  const parentComment = updatedComments[parentId];
  if (childComments.length !== 0) {
    childComments.forEach((id) => delete updatedComments[id]);
  }
  delete updatedComments[currentId];

  if (parentId === null) {
    updatedComments.firstLevelIds = prevList.firstLevelIds.filter(
      (id) => id !== currentId
    );
    return { ...updatedComments };
  }
  const updatedParentComment = {
    ...parentComment,
    children: parentComment.children.filter((id) => id !== currentId),
  };
  return {
    ...updatedComments,
    [parentId]: updatedParentComment,
  };
};

/** Ref: https://codesandbox.io/s/optimised-nested-comments-4cqcbx */
