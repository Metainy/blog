---
title: Create a Symbolic Link in Linux
publishDate: 2023-01-15T00:00:00.000Z
description: Types of Symlinks and how to create and delete them
category: Guides
tags:
  - Linux
  - Devops
cover: "/uploads/covers/linux.png"
---

A symlink (symbolic) is a type of file that points to other files or directories (folders) in Linux. Also referred to as
soft links. If you're a Windows user you can think of symlinks as shortcuts.

Symbolic links are useful because they act as shortcuts to a file or directory. You can create a symlink (symbolic) by
using the `ln` command in the command line.

## Difference Between Soft Link and Hard Link

Soft links or symbolic links are similar to shortcuts, they point to the original file or directory on your system. A
hard link will create a copy of the file or the directory.

Soft links can point to other files or directories on a different file system, whereas hard links cannot.

## Creating a Symlink

Here is the basic syntax for creating a symlink to a file in your terminal.

```bash
ln -s <path to the file/directory to be linked> <path to the link to be created> 
```

We use the `ln` command to create the links.

The `-s` flag specifies that the link should be a soft link. `-s` can also be entered as `-symbolic`. If we omit
the `-s` flag
a
hard link will be created instead.

The first argument represents the path of the file or directory that we want to create a link for.

The second argument is the path of the link we want to create. If omitted, the system will create a new link in the
current directory we are in.

Note when you successfully create a symlink nothing is printed in the terminal, it will only return an output if
something goes wrong.

### Create a Symlink for a File

Let's say we want to create a symlink for a `data.txt` file which is located in `/home/mody` directory.

```bash
ls -s /home/mody/data.txt my-data.txt
```

This command should create the link file `my-data.txt` in the current directory, and any modification to `my-data.txt`
will also be reflected in the original file.

We can create the link file in another directory if we want, we just have to make sure that this directory exists first.

```bash
ls -s /home/mody/data.txt files/my-data.txt
```

You should see that new symbolic link show up in your directory.

### Create a Symlink for a Directory

Similar to the file approach we can create a symlink for `data` directory which is located in `/home/mody` directory.

```shell
ln -s /home/mody/data my-files
```

This would create a linked directory called `my-files` which would contain the contents of `/home/mody/data` directory,
and any changes to this linked folder will also affect the original folder.

Like linking files, we can create the link directory in another path if we want by specifying the full path.

If successful, you should see the directory in the specified directory.

## Check Symlink Status

To check that our symbolic link was successful, we can use the `ls` command. The `ls` command will list information
about files and the `-l` flag represents the symbolic link.

```bash
ls -l <path to our symlink>
```

Running this command on the terminal will display the properties of the file.

```bash
lrwxrwxrwx 1 root root 8 Oct 22 2022 my-data.txt -> data.txt
```

If the first character is the letter `l`, it means the file/folder is a symlink.

The `->` at the end indicating the file/folder the symlink is pointing to. In our case `my-data.txt` symlink is pointing
to the original file `data.txt`.

## Remove a Symlink

Before you'd want to remove a symlink, you may want to confirm that a file or directory is a symlink using the method
mentioned above.

To remove symlink you can either use the `unlink` or `rm` command.

If we wanted to remove the `my-data.txt` symlink we created earlier, then we can use either of these commands:

```bash
rm my-data.txt
```

```bash
unlink my-data.txt
```

Now we should see that the symlink was removed from our directory.

## Overwrite Symlinks

If we try to create a new symlink called `my-data.txt`, it will result in an error because it is already being used and
pointing to another file.

```bash
ln: my-data.txt: File exists
```

We can overwrite this error by using the force `-f` flag.

```bash
ls -sf /home/mody/data.txt my-data.txt
```

## Find and Delete Broken Symlinks

Broken links occur when the file or folder that a symlink points to changes path or is deleted.

For example, if `data.txt` moves from `/home/mody` directory to `/home/mody/docs`, the `my-data.txt` link we created
becomes broken. Every attempt to access to the file will result in a `No such file or directory` error. This is because
the link has no contents of its own.

When you discover broken links, you can easily delete the file. An easy way to find broken symlinks is using this
command:

```bash
find /home/mody -xtype l
```

This will list all broken symlinks in the `mody` directory, from files to directories to subdirectories.

Passing the `-delete` flag will find and delete them like so

```bash
find /home/mody -xtype l -delete
```

That's it! Now you can create, delete, and play around with these handy commands to enhance your productivity.
