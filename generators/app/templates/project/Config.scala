import sbt._
import Keys._

object Config {
    val settings: Seq[Setting[_]] = Seq(
        organization := "com.example",
        scalaVersion := "2.11.7",
        version := "1.0-SNAPSHOT"
    )

    val dependencies = Seq(
        "mysql" % "mysql-connector-java" % "5.1.34",
        "com.typesafe.play" %% "play-slick" % "2.0.0",
        "com.typesafe.play" %% "play-slick-evolutions" % "2.0.0",
        "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % Test
    )
}