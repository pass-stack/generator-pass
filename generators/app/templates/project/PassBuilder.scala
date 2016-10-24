import play.sbt.PlayRunHook
import sbt._
import java.net.InetSocketAddress
import java.io.File
import com.scalapenos.sbt.prompt._
import com.scalapenos.sbt.prompt.Styles._

object PassBuilder {
  val passLogo = IO.read(new File("project/passLogo.txt"))
  def apply(base: File): PlayRunHook = {
    object PassBuilderProcess extends PlayRunHook {

      override def beforeStarted(): Unit = {
        Process("grunt", base).run
      }

      override def afterStarted(addr: InetSocketAddress): Unit = {
        print(StyledText(passLogo, fg(26).bg(0)))
        print(StyledText("Application Started", fg(26).bg(0)))
      }

      override def afterStopped(): Unit = {
        print(StyledText(passLogo, fg(26).bg(0)))
        print(StyledText("Application Stopped", fg(26).bg(0)))
      }
    }

    PassBuilderProcess
  }
}