---
layout: default
title: Visa Support at DjangoCon Africa
heading: Visa Support at DjangoCon Africa
permalink: /visas/
description: Information about obtaining a Visa to visit DjangoCon Africa
---


Visa Support
{: .h1}

### Do I need a visa to enter {{site.host_city_and_country}}?

That depends on what country issued your passport; see the [foreign affairs](#) website for more information.

### I was asked to upload some document, What do I do about this?

- **Other relevant documents:** Your bank statement should suffix for this.
- **[Business License](https://drive.google.com/file/d/1pHVz9Xp_ReI4MCFM20y0En5mDLSpRo4t/view?usp=sharing):** Download the [business license](https://drive.google.com/file/d/1pHVz9Xp_ReI4MCFM20y0En5mDLSpRo4t/view?usp=sharing) and upload as PDF for the application

### I was asked for 'Company name/ Organization registration No'
- PyCon Tanzania Registration number is 530245


### I need a letter to obtain a visa. Can you help me with that ?

We sure can! Click on <a class="notice" style="font-weight: 700;" href="" data-bs-toggle="modal" data-bs-target="#inviteModal">Get Invitation Letter</a> to request your letter of invitation for your visa application at the {{site.host_city_and_country}} Consulate.<br>

You will be required to provide:

- Full name (as it appears on your passport)
- Passport number
- Date of birth
- Home address
- Title of talk you're presenting (if any)
- Amount of opportunity grant funds awarded (if any)<br>

<p class="notice"> Do this as soon as you can! It can take a while to get an appointment.</p>
### I can't get an appointment with the {{site.host_city_and_country}} Consulate in time for the conference. Can I get a refund?

Send an <a href="mailto:{{site.visa_email}}">email</a> to our visa team and we'll make sure you get taken care of.

<div
  class="modal fade"
  id="inviteModal"
  tabindex="-1"
  aria-labelledby="inviteModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="inviteModalLabel">
          Djc Africa'23 Invitation Letter
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
            <form id="form" method="POST" enctype="multipart/form-data">
            <div class="mb-3">
              <label for="fullname" class="col-form-label">Full name (as it appears on your passport)</label>
              <input
                type="text"
                name="fullname"
                class="form-control"
                id="fullname"
                placeholder="Noah Doe"
                required
              />
              </div>
                <div class="mb-3">
              <label for="address" class="col-form-label">Address</label>
              <input
                type="text"
                name="address"
                class="form-control"
                id="address"
                placeholder="AK-0023-22 Street, Zanzibar, Tanzania"
                required
              />
                </div>
                <div class="mb-3">
              <label for="dob" class="col-form-label">Date of Birth</label>
              <input
                type="text"
                class="form-control"
                name="dob"
                id="dob"
                placeholder="July 09 1990"
                required
              />
                </div>
                <div class="mb-3">
              <label for="email" class="col-form-label">Email</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="visas@djangocon.africa"
                required
              />
                </div>
                <div class="mb-3">
              <label for="passport_no" class="col-form-label">Passport Number</label>
              <input
                type="text"
                name="passport_no"
                id="passport_no"
                class="form-control"
                placeholder="A01923459B"
                required
              />
                </div>
                <div class="mb-3">
              <label for="letterselection" class="col-form-label"
                >Are you a Speaker, an Opportunity Grant recipient, or a general
                attendee?</label
              >
              <select name="letterselection" id="letterselection"  class="form-control" required>
                <option value="none">Attendee</option>
                <option value="og">Opportunity Grant recipient</option>
                <option value="speaker">Speaker</option>
              </select>
              </div>
              <div id="og" class="myDiv">
                <label for="og" class="col-form-label">Grant Amount (if applicable)</label>
                <input type="number"  class="form-control" name="og" id="og" placeholder="2000.00" />
              </div>
              <div id="speaker" class="myDiv" >
                <label for="talk" class="col-form-label">Talk/Tutorial Title</label>
                <input
                  type="text"
                  name="talk"
                  id="talk"
                  class="form-control"
                  placeholder="DjangoCon Africa is the best!"
                />
              </div>
          <div class="text-center">
                 <button id="submit" type="submit" class="invite">Submit</button>
</div>
            </form>
            <div style="text-align:center; padding-bottom: 100px; margin-top: -30px;">
                <p id="inprogress">Thank you for your interest in DjangoCon Africa 2023! We're generating your invitation letter
                </p>
                <div id="loading"></div>
                <p id="ready">Your invitation letter has been sent to the DjangoCon Africa organizers for review. Once they approve it,
                  they will email it to you.<br> Thanks for your interest!🙏🏽</p>
              </div>
      </div>
    </div>
  </div>
  </div>
