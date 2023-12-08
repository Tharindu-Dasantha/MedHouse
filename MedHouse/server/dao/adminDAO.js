let admins;

export default class AdminsDAO {
  static async injectDB(conn) {
    if (admins) {
      return;
    }
    try {
      admins = await conn.db(process.env.FACILITIES_NS).collection("facility");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in adminDAO: ${e}`
        );
      }
    }
}
