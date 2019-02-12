import React from "react";

function PlayTime() {
  return (
    <div>
      <h1>Games</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-3">
            <object name="flash" id="flash" width="100%" height="519">
              <param
                name="movie"
                value="http://www.booksandgames.com/swf/widgets/anagramScramble-widget-loader.swf"
              />
              <param value="noScale" name="scale" />
              <param value="false" name="menu"/>
              <param value="true" name="allowFullScreen" />
              <param value="always" name="allowScriptAccess" />
              <param
                value="isBrowser=true&isWidget=true&userId=0&serviceUrl=http://www.booksandgames.com/flashgateway.aspx&gameId=32"
                name="flashvars"
              />
              <embed
                src="http://www.booksandgames.com/swf/widgets/anagramScramble-widget-loader.swf"
                type="application/x-shockwave-flash"
                allowscriptaccess="always"
                allowFullScreen={true}
                flashvars="isBrowser=true&isWidget=true&userId=0&serviceUrl=http://www.booksandgames.com/flashgateway.aspx&gameId=32"
                width="798"
                height="519"
              />
            </object>
          </div>
          <div className="col-md-12">
            <object name="flash" id="flash" width="100%" height="519">
              <param
                name="movie"
                value="http://www.booksandgames.com/widgets_xml/swf/missingEverythingAnagramWidget-loader.swf"
              />
              <param value="noScale" name="scale" />
              <param value="false" name="menu" />
              <param value="true" name="allowFullScreen" />
              <param value="always" name="allowScriptAccess" />
              <param
                value="isBrowser=true&isWidget=true&userId=0&serviceUrl=http://www.booksandgames.com/flashgateway.aspx&gameId=32"
                name="flashvars"
              />
              <embed
                src="http://www.booksandgames.com/widgets_xml/swf/missingEverythingAnagramWidget-loader.swf"
                type="application/x-shockwave-flash"
                allowscriptaccess="always"
                allowFullScreen={true}
                flashvars="isBrowser=true&isWidget=true&userId=0&serviceUrl=http://www.booksandgames.com/flashgateway.aspx&gameId=32"
                width="790"
                height="519"
              />
            </object>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayTime;
