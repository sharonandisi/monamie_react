import React from "react";

function PlayTime() {
  return (
    <div className="s-time">
      <h1 className="text-center">Games</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
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
          <div className="col-md-6">
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

      <div
        className="modal fade"
        id="game1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="game1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="game1Label">
                Anagram Scrabble
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <object name="flash" id="flash" width="100%" height="519">
                <param
                  name="movie"
                  value="http://www.booksandgames.com/swf/widgets/anagramScramble-widget-loader.swf"
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
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="game2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="game2Label"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="game2Label">
                Anagram Scrabble
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
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
    </div>
  );
}

export default PlayTime;
