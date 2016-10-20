name := """pass"""

Config.settings

//PASS/Modules/Start
//lazy val users = (project in file("modules/users")).enablePlugins(PlayScala)
//PASS/Modules/End

lazy val main = (project in file(".")).enablePlugins(PlayScala)
//PASS/ModuleDependecies/Start
//    .enablePlugins(PlayScala).dependsOn(users).aggregate(users)
//PASS/ModuleDependecies/End

libraryDependencies ++= Config.dependencies