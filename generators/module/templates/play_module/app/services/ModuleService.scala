package services.<%= moduleName %>.<%= moduleNameCap %>Service

import models.<%= moduleName %>._


object <%= moduleNameCap %>Service{
	val dbConfig = DatabaseConfigProvider.get[JdbcProfile](Play.current)
	val <%= moduleName %>s = TableQuery[<%= moduleNameCap %>TableDef]
}