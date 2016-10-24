import play.sbt.PlayRunHook
import sbt._
import java.net.InetSocketAddress
import java.io.File

object PassBuilder {
  val passLogo = IO.read(new File("project/passLogo.txt"))
  def apply(base: File): PlayRunHook = {
    object PassBuilderProcess extends PlayRunHook {

      override def beforeStarted(): Unit = {
        Process("grunt", base).run
      }

      override def afterStarted(addr: InetSocketAddress): Unit = {
        print(passLogo)
        println("Application Started")
      }

      override def afterStopped(): Unit = {
        print(passLogo)
        println("Application Stopped")
      }
    }

    PassBuilderProcess
  }
}