# 🚀 Unix Command Showcase
> A practical guide to the essential terminal commands for developers.
$ pwd - Before starting, we need to know exactly where we are in the computer.

/Users/developer/Desktop

2. Create a project folder (mkdir)
Make Directory. Let's create a new folder for our website project.

$ mkdir my-website

3. Enter the folder (cd)
Change Directory. Move inside the folder we just created to start working.

$ cd my-website

4. Create empty files (touch)
We need a standard HTML file. The touch command creates an empty file instantly.

$ touch index.html

5. Check your work (ls)
List. Let's confirm that the file was actually created inside our folder.

$ ls
index.html

6. Add content to the file (echo)
Instead of opening a text editor, we can "echo" text directly into the file using the > symbol.

$ echo "<h1>Hello World</h1>" > index.html

7. Read the file content (cat)
Concatenate. Let's print the contents of the file to the terminal screen to make sure the text was saved.

$ cat index.html
<h1>Hello World</h1>

8. Make a backup (cp)
Copy. Let's create a duplicate of our file just in case we mess up.

$ cp index.html backup_file.html

9. Delete the backup (rm)
Remove. We decided we don't need the backup anymore. Let's delete it permanently.

$ rm backup_file.html