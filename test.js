const User = require("./User");
const db = require("./database");

db.sequelize
  .authenticate()
  .then(() => {
    console.log("데이터베이스 연결 성공");
    console.log("db.sequelize : ", db.sequelize);
    console.log("db.Sequelize : ", db.Sequelize);
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
/**
   * Executing (default): SELECT 1+1 AS result
Connection has been established successfully.

   */

User.create({
  name: "John Doe",
  email: "john@example.com",
})
  .then((newUser) => {
    console.log("새로운 사용자가 생성되었습니다.", newUser.toJSON());
  })
  .catch((error) => {
    console.error("사용자 생성 중 오류 발생:", error);
  });
