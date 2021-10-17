window.currentId = 0;
const idGenerator = () => {
  return ++window.currentId;
};

export default idGenerator;
