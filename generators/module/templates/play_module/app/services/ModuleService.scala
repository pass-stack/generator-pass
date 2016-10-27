package services

import play.api.Play
import slick.driver.JdbcProfile
<%= "import slick.driver." + slickDBDriver + ".api._" %>
import play.api.db.slick.DatabaseConfigProvider
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
import models.<%= moduleName %>._

object <%= moduleNameCap %>Service {
  val dbConfig = DatabaseConfigProvider.get[JdbcProfile](Play.current)
  val <%= moduleName %>s = TableQuery[<%= moduleNameCap %>TableDef]

  def getAll = {
    dbConfig.db.run(<%= moduleName %>s.result)
  }

  def get(id: Long) = {
    dbConfig.db.run(<%= moduleName %>s.filter(_.id === id).result.headOption)
  }
  def create(<%= moduleName %>: <%= moduleNameCap %>) = {
    dbConfig.db.run(<%= moduleName %>s += <%= moduleName %>)
  }

  def update(<%= moduleName %>: <%= moduleNameCap %>) = {
    dbConfig.db.run(<%= moduleName %>s.filter(_.id === <%= moduleName %>.id).update(<%= moduleName %>))
  }

  def delete(id: Long) = {
    dbConfig.db.run(<%= moduleName %>s.filter(_.id === id).delete.asTry)
  }
}