import React from 'react';
import SunEditor from 'suneditor-react';
import plugins from 'suneditor/src/plugins'
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import './height.css';


// import dynamic from 'next/dynamic'
// const SunEditor = dynamic(
//     () => import('suneditor-react'),
//     { ssr: false }
// )
// const plugins = dynamic(
//     () => import('suneditor/src/plugins'),
//     { ssr: false }
// )

const Editor = ({ onChange, name, value }) => {
    return (
        <SunEditor
            name="my-editor"
            height={500}
            setOptions={{
                plugins: plugins,
                buttonList: [
                    ['undo', 'redo'],
                    ['font', 'fontSize', 'formatBlock'],
                    ['paragraphStyle', 'blockquote'],
                    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                    ['fontColor', 'hiliteColor', 'textStyle'],
                    ['removeFormat'],
                    '/',
                    ['outdent', 'indent'],
                    ['align', 'horizontalRule', 'list', 'lineHeight'],
                    ['table', 'link', 'image', 'video'],
                    ['fullScreen', 'showBlocks', 'codeView'],
                    ['preview', 'print'],
                    ['save']
                ]
            }}
            onChange={(content) => {
                onChange({ target: { name, value: content } });
            }}
            setContents={value}
            setDefaultStyle="font-family: Montserrat; font-size: 16px;"
        />
    );
};

export default Editor;
