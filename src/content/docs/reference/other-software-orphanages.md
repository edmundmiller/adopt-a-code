---
title: Other Software Orphanage Projects
description: Other places to find projects to maintain
---

There are plenty of places to find and house software proejcts that the original author has moved on from.

## [Julia Orphanage](https://github.com/JuliaOrphanage)

<!-- https://github.com/JuliaOrphanage/.github/raw/main/profile/README.md -->

The **Julia Orphanage** collects packages that are no longer maintained
upstream, but are registered in [the General registry](https://github.com/JuliaRegistries/General/)
and either have active users or are required by other packages.

In the orphanage packages receive limited community-driven maintenance.

- If you would like to **become the new maintainer** of a package, then please contact us.

- If you no **longer wish to or are able to maintain a package**, then consider transferring it
  to the orphanage as an alternative to abandoning or archiving the repository.
  This way, we can keep it usable, and if someone volunteers to become the new maintainer,
  you do not have to be involved in the process.

### FAQ

#### How do I transfer a package to JuliaOrphanage?

- Use the [GitHub transfer option](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository#transferring-a-repository-owned-by-your-personal-account) in the repository settings, and transfer it to any of the JuliaOrphanage members
- Contact the member you created the transfer request to
  - [@StefanKarpinski](https://github.com/StefanKarpinski) can be contacted as `@stefan` on [the Julia Slack](https://julialang.org/slack/)
  - [@DilumAluthge](https://github.com/DilumAluthge) can be contacted as `@DilumAluthge` on [the Julia Slack](https://julialang.org/slack/)
  - [@tecosaur](https://github.com/tecosaur) can be contacted as `@Timothy` on [the Julia Slack](https://julialang.org/slack/) or [the Julia Zulip](https://julialang.zulipchat.com/), and [@tecosaur](https://discourse.julialang.org/u/tecosaur) on the Julia Discourse
- Once transfered, we can give access to the repo to all the relevant people, including yourself as a maintainer should you wish

Once this is done, somebody should

- Make a pull request to [the General registry](https://github.com/JuliaRegistries/General/pulls) in which you edit the repo URL in the package's Package.toml file (e.g [E/Example/Package.toml](https://github.com/JuliaRegistries/General/blob/master/E/Example/Package.toml#L3)).
- If the PR is not attended to, or if you have any questions, you can ask for help in the `#pkg-registration` Slack channel.

Technically if you skip the last step things will keep working, because GitHub will redirect; but it is best practice.

## [Emacs Orphanage](https://github.com/emacsorphanage)

<!-- https://github.com/emacsorphanage/.github/raw/o/profile/README.md -->

| [Emacsmirror] ([github][m]) | [Emacsattic] ([github][a]) | [Emacsorphanage] ([github][o]) | [epkg.el] | [statistics] |
| --------------------------- | -------------------------- | ------------------------------ | --------- | ------------ |

The **Emacsmirror** is a growing collection of [Emacs] Lisp packages. All
mirrored packages are available as [Git] repositories. In most cases this is
done by mirroring the upstream Git repository, but if upstream uses something
else, then the mirror nevertheless makes the package available as a Git
repository.

- The best way to add a package to the Emacsmirror, is to add it to Melpa
  instead. After it has been added there, it usually also appears on the
  mirror within a few days.

If a package is no longer maintained upstream, it is usually moved from the
Emacsmirror to the **Emacsattic**. Such packages are usually also removed
from Melpa.

The **Emacsorphanage** also contains packages that are no longer maintained
upstream, but which still have users or are still required by some other
packages. In the orphanage they receive only limited maintenance. Some of
the packages in the orphanage are there for different reasons.

- If you would like to become the new maintainer of a package, then please
  contact us.

- If you no longer want to maintain a package, then transferring it to the
  orphanage is an alternative to just archiving the repository. That way, we
  can keep it usable, and if someone volunteers to become the new maintainer,
  you do not have to be involved in the process.

[emacsmirror]: https://emacsmirror.net/
[emacsattic]: https://emacsmirror.net/attic/
[emacsorphanage]: https://emacsmirror.net/orphanage/
[m]: https://github.com/emacsmirror/
[a]: https://github.com/emacsattic/
[o]: https://github.com/emacsorphanage/
[epkg.el]: https://github.com/emacscollective/epkg/
[statistics]: https://emacsmirror.net/stats/compare.html
[emacs]: https://www.gnu.org/software/emacs/
[git]: https://git-scm.com/
[melpa]: https://melpa.org/

<br>
<details>
  <summary>
    <img src="https://raw.githubusercontent.com/tarsius/tarsius/master/img/heart.svg"/>
    Please consider <a href="https://magit.vc/donate/">sponsoring</a> my work.
	&nbsp;&nbsp;<em>Thank you! — Jonas Bernoulli</em>
  </summary>
  <ul>
    <li><a href="https://github.com/sponsors/tarsius/">Github Sponsors</a></li>
    <li><a href="https://magit.vc/donate/iban.html">IBAN</a></li>
    <li><a href="https://magit.vc/donate/ach.html">ACH</a></li>
    <li><a href="https://magit.vc/donate/stripe.html">Stripe</a></li>
    <li><a href="https://magit.vc/donate/paypal.html">PayPal</a></li>
  </ul>
</details>

