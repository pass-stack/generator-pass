package models.<%= moduleName %>.<%= moduleNameCap %>

import play.api.data._
import play.api.data.Forms._
import scala.concurrent.ExecutionContext.Implicits.global

case class <%= moduleNameCap %>( <%- fields.map(function(field){ return field.name + ': ' + field.scalaType;}).join(', '); %>)

case class <%= moduleNameCap %>FormData( <%- fields.map(function(field){ return field.name + ': ' + field.scalaType;}).join(', '); %>)

object <%= moduleNameCap %>Form{
  val form = Form(
    mapping(
      <%- fields.map(function(field){
            return '"' + field.name + '"' + ' -> ' + field.scalaFormType;
        }).join(',\n      '); %>
    )(<%= moduleNameCap %>FormData.apply)(<%= moduleNameCap %>FormData.unapply)
  )
}

class <%= moduleNameCap %>TableDef(tag: Tag) extends Table[<%= moduleNameCap %>](tag, "<%= moduleName %>"){
  <%- fields.map(function(field){
        return 'def ' + field.name + ' = ' + 'column[' + field.scalaType + ']("' + field.name + '")';
    }).join('\n  '); %>

  override def * = (<%- fields.map(function(field){ return field.name}).join(', '); %>) <> (<%= moduleNameCap %>.tupled, <%= moduleNameCap %>.unapply)
}