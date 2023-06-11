---
title: Enhancing Your Virtual Machine with VirtualBox Guest Additions
publishDate: 2022-12-10T00:00:00.000Z
description: Installing VirtualBox Guest Additions on a virtual machine
category: Guides
tags:
  - VirtualBox
  - Devops
  - Linux
cover: "/uploads/covers/virtualbox.webp"
---

VirtualBox guest additions is a set of software tools installed in the guest VM after the OS has been installed.
They consist of device drivers and system applications that greatly improve the guest VM performance and usability.
They enable features such as drag and drop, shared folders, changing screen resolutions, copy-paste clipboards,
automated logins, and much more.

## Why Install VirtualBox Guest Addition?

VirtualBox guest additions can bring a number of features to your virtual machine, enhancing its performance and
usability.
Here are just a few benefits you can expect:

##### Seamless Integration

With VirtualBox guest additions, you can seamlessly integrate your host and guest operating systems. This means you can
easily share files between the two, enabling convenient drag and drop functionality. Whether you need to transfer
documents, images, or other files, it's possible with guest additions.

##### Flexible Display Resolutions

VirtualBox guest additions enable you to adjust the screen resolution of your guest VM to match your preferences. No
more being stuck with a limited set of resolutions that don't quite fit your needs.

##### Copy and Paste

Copying and pasting text or files between your host and guest OS isn't possible by default, which is an inconvenience
most of the time. You can enable it after installing the guest additions though.

##### Automated Logins

You can set up automated logins instead of having to repeatedly type in your login credentials every time you start your
guest VM.

## Installing VirtualBox Guest Addition on Ubuntu

Now that you understand the why, let's dive into the installation process. I have picked Ubuntu 22.04 as a guest VM, but
the same process goes for any Debian based distro.

### Installing Required Packages

Before we begin, we need to ensure that a few dependency packages are installed.  
Open your terminal and enter the following command:

```bash
sudo apt-get install gcc make perl
```

You'll be prompted to enter your password. Once entered, press `Y` to confirm the installation of the packages.

### Preparing Guest Addition Installer

To prepare the VirtualBox guest addition installer, follow these steps:

1. Launch VirtualBox and navigate to the `Devices` menu.
2. Select `Insert the guest addition CD image`.

That's it. This action will mount the VirtualBox guest addition Virtual CD to your Ubuntu guest OS.

Now all we have to do is run the installer.

### Running Guest Addition Installer

Now that we have the Virtual CD mounted, it's time to run the installer. There are two ways to do this:

If you prefer using the UI, navigate to the directory where the VirtualBox guest addition files are located.
In most cases, the directory can be found under `/media/YOUR-USERNAME/VBox_GAs_***`, with the stars representing the
current version of VirtualBox.

Right-click inside the directory and choose Open in Terminal. Then, run the following command:

```bash
sudo bash VBoxLinuxAdditions.run
```

Alternatively, open a new terminal instance from any location, and run the installer with the following command:

```bash
sudo bash /media/YOUR-USERNAME/VBox_GAs_***/VBoxLinuxAdditions.run
```

Don't forget to replace `YOUR-USERNAME` with your username, and the stars with the correct VirtualBox version.

After the installation process completes, it's time to reboot your machine. Simply enter the following command:

```bash
reboot
```

Congratulations! You have successfully installed VirtualBox guest additions on your Ubuntu guest OS. Now you can enjoy
the benefits of shared clipboard, drag and drop functionality, and custom screen resolutions.
