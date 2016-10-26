name := """<%= appName %>"""

Config.settings

//PASS#Modules#Start
//PASS#Modules#End

lazy val main = (project in file(".")).enablePlugins(PlayScala)
//PASS#ModuleDependecies#Start
//PASS#ModuleDependecies#End

libraryDependencies ++= Config.dependencies

PlayKeys.playRunHooks += PassBuilder(baseDirectory.value)