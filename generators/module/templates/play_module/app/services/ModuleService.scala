package services.<%= moduleName %>.<%= moduleNameCap %>Service

import play.api.Play
import slick.driver.JdbcProfile
<%= "import slick.driver." + slickDBDriver + ".api._" %>
import play.api.db.slick.DatabaseConfigProvider
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
import models.<%= moduleName %>._

object <%= moduleNameCap %>Service{
  val dbConfig = DatabaseConfigProvider.get[JdbcProfile](Play.current)
  val <%= moduleName %>s = TableQuery[<%= moduleNameCap %>TableDef]

  def add<%= moduleNameCap %>(<%= moduleName %>: <%= moduleNameCap %>) = {
    dbConfig.db.run(<%= moduleName %>s += <%= moduleName %>).map(res => "<%= moduleNameCap %> successfully added").recover{
      case e: Exception => e.getCause.getMessage
    }
  }

  def delete<%= moduleNameCap %>(id: Long) = {
    dbConfig.db.run(<%= moduleName %>s.filter(_.id === id).delete)
  }

  def get<%= moduleNameCap %>(id: Long) = {
    dbConfig.db.run(<%= moduleName %>s.filter(_.id === id).result.headOption)
  }

  def getAll = {
    dbConfig.db.run(<%= moduleName %>s.result)
  }
}