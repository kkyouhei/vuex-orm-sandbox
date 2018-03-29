export default {
  getUserAndRole (callback) {
    callback({
      users: [
        {
          id: 1,
          name: "user name one",
          age: 21,
          role_id: 101
        },
        {
          id: 2,
          name: "user name two",
          age: 22,
          role_id: 102
        },
        {
          id: 3,
          name: "user name three",
          age: 23,
          role_id: null
        }
      ],
      roles: [
        {
          id: 101,
          title: "Administrator"
        },
        {
          id: 102,
          title: "Assistant"
        }
      ]
    });
  }
};
