package controllers.<%= moduleName %>

import play.api._
import play.api.mvc._
import views.html._

class HomeController extends Controller {

  def index = Action { implicit request =>
    Ok("<%= moduleName %>")
  }
}