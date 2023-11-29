import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "wordCounter" is now active!');

    let disposable = vscode.commands.registerCommand('extension.countWords', () => {
        // Получаем активный текстовый редактор
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            // Получаем текст из редактора
            const text = editor.document.getText();

            // Разбиваем текст на слова
            const words = text.match(/\b\w+\b/g);

            // Подсчитываем количество слов
            const wordCount = words ? words.length : 0;

            // Выводим результат в строку состояния
            vscode.window.setStatusBarMessage(`Word Count: ${wordCount}`, 2000);
        } else {
            vscode.window.showInformationMessage('Open a file to count words.');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
