package controllers

import play.api._
import play.api.mvc._
import views.html._
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import scala.util.{Failure, Success}
import play.api.libs.json._
import models.<%= moduleName %>._
import models.<%= moduleName %>.<%= moduleNameCap %>._
import services.<%= moduleNameCap %>Service

class <%= moduleNameCap %>Controller extends Controller {
  implicit val <%= moduleName %>Reads  = Json.reads[<%= moduleNameCap %>]
  implicit val <%= moduleName %>Writes = Json.writes[<%= moduleNameCap %>]

  def index = Action {implicit request =>
    Ok("<%= moduleName %>")
  }

  def getAll() = Action.async {implicit request =>
    <%= moduleNameCap %>Service.getAll.map {<%= moduleName %>s =>
      Ok(Json.toJson(<%= moduleName %>s))
    }
  }

  def get(id: Long) = Action.async {implicit request =>
    <%= moduleNameCap %>Service.get(id).map {_ match {
        case Some(<%= moduleName %>) => {
          Ok(Json.toJson(<%= moduleName %>))
        }
        case None => {
          NotFound(Json.toJson(Map("error" -> "<%= moduleNameCap %> Not Found")))
        }
    }}
  }

  def create() = Action.async(parse.json) {implicit request =>
    request.body.validate[<%= moduleNameCap %>] match {
      case js<%= moduleNameCap %>: JsSuccess[<%= moduleNameCap %>] => {
        val <%= moduleName %> = js<%= moduleNameCap %>.get
        <%= moduleNameCap %>Service.create(<%= moduleName %>).map {_ match {
          case Success(r) => Ok(Json.toJson(<%= moduleName %>))
          case Failure(e) => NotFound(Json.toJson(Map("error" -> "<%= moduleNameCap %> was not created")))
        }}
      }
      case e: JsError => {
        Future(NotAcceptable(Json.toJson(Map("error" -> "failed  to validate <%= moduleNameCap %>"))))
      }
    }
  }

  def update(id: Long) = Action.async(parse.json) {implicit request =>
    request.body.validate[<%= moduleNameCap %>] match {
      case js<%= moduleNameCap %>: JsSuccess[<%= moduleNameCap %>] => {
        val <%= moduleName %> = js<%= moduleNameCap %>.get.copy(id = id)
        <%= moduleNameCap %>Service.update(<%= moduleName %>).map {_ match {
          case Success(r) => Ok(Json.toJson(<%= moduleName %>))
          case Failure(e) => NotFound(Json.toJson(Map("error" -> "<%= moduleNameCap %> was not updated")))
        }}
      }
      case e: JsError => {
        Future(NotAcceptable(Json.toJson(Map("error" -> "failed  to validate <%= moduleNameCap %>"))))
      }
    }
  }

  def delete(id: Long) = Action.async {implicit request =>
    <%= moduleNameCap %>Service.delete(id).map {_ match{
      case Success(r) => Ok(Json.toJson(Map("message" -> "<%= moduleNameCap %> deleted")))
      case Failure(e) => NotFound(Json.toJson(Map("error" -> "<%= moduleNameCap %> was not deleted")))
    }}
  }
}